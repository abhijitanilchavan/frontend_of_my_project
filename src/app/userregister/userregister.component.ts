import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private src:BusService,private router:Router){}
  fg!:FormGroup;

  ngOnInit(): void {
    this.fg=this.fb.group({
      uname:[],
      emailid:[],
      mobno:[],
      username:[],
      password:[]

    })
   
  }

 onSubmit(){
  alert("save")
  this.src.usersave(this.fg.value).subscribe();
  this.router.navigateByUrl('/userlogin');

 
 }

}
