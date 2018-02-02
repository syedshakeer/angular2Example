import { Component } from '@angular/core';
import { NgTableComponent, NgTableSortingDirective  }  from 'ng2-table';
import { JsonPipe } from '@angular/common/src/pipes';

import { FormsModule} from '@angular/forms'
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sakeer Hussain Pasapala Syaad';
  bntStyle: string;



  public ProductDetails: object  [];

  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];
  ///
  public Products = [
    { Name: 'Hp', title: 'HP ENVY Laptop - 15t touch', price: '1099', store: 'Best Buy', model: '15-BS013DX' },
    { Name: 'Dell', title: 'Dell Laptop', price: '700', store: 'Amazon', model: 'I7378-3000SLV-PUS' },
    { Name: 'Lenovo', title: 'Lenovo Touch-Screen Laptop', price: '670', store: 'Target', model: '81A40025US' },
    { Name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },
    { Name: 'Hp', title: 'HP Laptop - 17t touch ', price: '420', store: 'Target', model: '1EZ78AV_1' },
    { Name: 'Dell', title: 'Dell - XPS 27" Touch-Screen All-In-One', price: '670', store: 'Target', model: 'BBY-311C3FX' },
    { Name: 'Dell', title: 'Dell - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },
    { Name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },
    { Name: 'Dell', title: 'Dell - XPS 2-in-1 13.3" Touch-Screen Laptop', price: '1199.99', store: 'Target', model: 'XPS9365-7086SLV-PUS' }
  ];


public  data = [{name:'xyz', value:'0', checked:true},
{name:'abc', value:'1', checked:false},
{name:'def', value:'2', checked:false}];

public tempCitiesData=[];
 public CitiesData = [
  {taskname:'chennai',  id:'maa',status:'Submitted'},
  {taskname:'mumbai',   id:'bom',status:'Resolved'},
  {taskname:'delhi',    id:'del',status:'Submitted'},
  {taskname:'salem',    id:'che',status:'In Progress'},
  {taskname:'bengaluru',id:'blr',status:'Resolved'},
  {taskname:'chavvapet',id:'chv',status:'Submitted'}
  ];

  public isClassVisible: boolean;
  public cats: string[] = ["option1", "option2", "option3"];
  public diffdays: number;
  constructor() {

    console.log('A');
    setTimeout(function () { console.log('your name') });

    console.log('end set Time out');
    this.diffdays = 490;
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.`;
    console.log(sentence);

    let unNumber: undefined = undefined;
    console.log(undefined);

    this.bntStyle = 'btn-default';
    this.getProducts();
    this.getData();
    this.getCitiesData();
    //this.isClassVisible = true;
  }
  getProducts() {
    console.log("getProducts");
    return this.Products;
  }

  getData(){
    console.log("get data"+this.data[0].name);
    return this.data;
  }

  getCitiesData(){
console.log("get Cities data"+ this.CitiesData[0].taskname);
    return this.CitiesData;
  }

   filterByString(searchString:string) {
     console.log("Value:"+searchString);

    this.tempCitiesData= this.CitiesData.filter(
      e => e.id.includes(searchString) || e.taskname.includes(searchString))
        .sort((a,b) => a.id.includes(searchString) && !b.id.includes(searchString) ? -1 : b.id.includes(searchString) && !a.id.includes(searchString) ? 1 :0);
        console.log("after filter"+this.tempCitiesData[0].taskname);
        return this.CitiesData;
      }


      Searchtask(searchString:string)
      {
      this.tempCitiesData= this.CitiesData.filter(
          e => e.taskname.includes(searchString));
          
          console.log(this.tempCitiesData);
          return this.CitiesData=this.tempCitiesData;
      }
public searchString:string;
SearchKeyCode(searchString2:string)
      {
        console.log("Keycode:"+searchString2);
        if(searchString2.length>0){
                 
        this.searchString=searchString2;
        this.tempCitiesData= this.CitiesData.filter(
          e => e.taskname.includes(this.searchString));
          
          console.log(this.tempCitiesData);
          return this.CitiesData=this.tempCitiesData;
      }
      else{
        console.log("search empty"+this.CitiesData);
        return this.CitiesData;

      }
         
      }

  public Price: number;

  Isprice(price): boolean {
    this.Price = price;
    if (this.Price >= 800) {
      console.log(this.Price);
      ///this.isClassVisible = true;
      return true;
    }
  }

  public num: number = 10;
  public value: any;
  public strValue: string;
  submit() {
    this.bntStyle = 'btn-change';
    this.value = this.num;
    console.log('value:' + this.value);

    this.strValue = this.num.toString(8);
    console.log('str Value:' + this.strValue);

  }

  public amount = function (n1: number, n2: number) {
      return n1 + n2;
    }
}
