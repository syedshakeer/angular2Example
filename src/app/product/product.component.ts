import { Component, OnInit,NgModule} from '@angular/core';
import {Http,Response,HttpModule} from  '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private apiUrl="http://localhost:3000/";
  private Products:string="products";
  public productsResult:any=[];
  constructor(private http: Http) { }

  ngOnInit() {
    //this.getProducts();
    //this.getProducts();
    this.getAPI();
  }
  getData(){
 console.log("Products component"+this.apiUrl+this.Products);
   this. productsResult= this.http.get(this.apiUrl+this.Products)
   .map((res:Response)=>res.json());
  console.log("Product Result:"+this.productsResult);
  return this.productsResult;
  }

  getProducts(){
    this.getData().subscribe(data=>{
      console.log(data.statusText);
      this.productsResult=data
    })
  }

  getAPI(){
    this.http.get(this.apiUrl+this.Products).subscribe(data => {
      console.log("New getAPI:"+data);
      this.productsResult=data.json();
      console.log(this.productsResult.Name);
  });
}

}

