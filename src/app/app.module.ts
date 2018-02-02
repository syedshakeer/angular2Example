
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import {Http,Response, HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { StudnetComponent } from './studnet/studnet.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    StudnetComponent
    
  ],
  imports: [
    BrowserModule,FormsModule , 
    HttpModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserComponent,ProductComponent,StudnetComponent]
})
export class AppModule { }
