import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindbusComponent } from './findbus/findbus.component';
import { NavComponent } from './nav/nav.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addbus',component:AddbusComponent},
  {path:'findbus',component:FindbusComponent},
  {path:'adminseedetails', component:NavComponent},
  {path:'Viewalldata',component:ViewalldataComponent},
  {path:'seesingledata/:busno',component:SeesingledataComponent},
  {path:'editpage/:busno',component:EditpageComponent},
  {path:'register',component:RegisterComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'login',component:LoginpageComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'bookticket/:busno',component:BookticketComponent},

  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
