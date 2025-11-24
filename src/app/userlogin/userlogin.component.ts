import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private fb:FormBuilder,private src:BusService,private router:Router){}
  fg!:FormGroup;
 
  
  ngOnInit(): void {
    this.fg=this.fb.group({

      username:[],
      password:[]
    

    })
  }
st:any;
  onLogin(){
    alert("login")
    
    const username=this.fg.controls['username'].value;
    const password=this.fg.controls['password'].value;
    this.src.checkuser(username,password).subscribe((s:any)=>{
    this.st=s;
   console.log(this.st.username);

if (username === this.st.username && password === this.st.password) {

      this.router.navigateByUrl('/findbus');
      
     
    }else{

      this.router.navigateByUrl('/userlogin');
       
    }

    });
 
  }

}
