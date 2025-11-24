import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router){}
  fg!:FormGroup;
  ngOnInit(): void {
    this.fg=this.fb.group({
      username:[],
      password:[]
    })
    
  }

  onAdminlogin(){
    const username=this.fg.controls['username'].value;
    const password=this.fg.controls['password'].value;

    if(username=="admin"&&password=="admin@123"){
    this.router.navigateByUrl('/adminseedetails');
    alert("login sucess")

    }else{
       this.router.navigateByUrl('/adminseedetails');
       alert("Try again")
    }

  }

}
