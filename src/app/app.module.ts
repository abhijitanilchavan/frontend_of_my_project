import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FindbusComponent } from './findbus/findbus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddbusComponent } from './addbus/addbus.component';
import { ViewalldataComponent } from './viewalldata/viewalldata.component';
import { SeesingledataComponent } from './seesingledata/seesingledata.component';
import { EditpageComponent } from './editpage/editpage.component';
import { RegisterComponent } from './register/register.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { BookticketComponent } from './bookticket/bookticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FindbusComponent,
    AddbusComponent,
    ViewalldataComponent,
    SeesingledataComponent,
    EditpageComponent,
    RegisterComponent,
    UserregisterComponent,
    AdminregisterComponent,
    LoginpageComponent,
    UserloginComponent,
    AdminloginComponent,
    HomeComponent,
    BookticketComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
