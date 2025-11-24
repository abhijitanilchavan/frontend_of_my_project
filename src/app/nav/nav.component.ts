import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {


  constructor(private router:Router){}

  navigatepag(){
    this.router.navigateByUrl("/findbus")
  }

  navigatepageofadd(){
     this.router.navigateByUrl('/addbus')
  }

  Viewalldata(){
    this.router.navigateByUrl('/Viewalldata');
  }
 
  }
  




