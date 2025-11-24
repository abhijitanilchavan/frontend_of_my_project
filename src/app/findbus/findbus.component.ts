import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styleUrls: ['./findbus.component.css']
})
export class FindbusComponent implements OnInit {
  constructor(private fb:FormBuilder,private sr:BusService,private router:Router){}

  fg!:FormGroup;
  ngOnInit(): void {
    this.fg=this.fb.group({

      toLocation:[],
      fromLocation:[]
    })
  }

  fromlocation:any;
  tolocation:any;

 busrecords: any[] = [];


  call(){
    alert("alertprint");
    console.log(this.fg.value);
    this.fg.controls['fromLocation'].value
     console.log(this.fg.controls['toLocation'].value)
    console.log(this.fg.controls['fromLocation'].value)

    this.tolocation=this.fg.controls['toLocation'].value;
    this.fromlocation=this.fg.controls['fromLocation'].value;

  this.sr.getrecord(this.tolocation, this.fromlocation).subscribe((s: any) => {
    this.busrecords = s;
    });


  }


  bookticketcall(busno:any){
    alert("book"+busno)
   this.router.navigate(['/bookticket',busno]);
    
    
  }

}
