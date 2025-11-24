import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  constructor(private fb:FormBuilder,private src:BusService,private ac:ActivatedRoute){}
  fg!:FormGroup;
  busdata:any;
  
pname:any;
page:any;
padharno:any;
pgender:any;

  ngOnInit(): void {

const busno=this.ac.snapshot.paramMap.get('busno');
  this.src.getsinglerecord(busno).subscribe((bus:any)=>{
 this.busdata=bus;

 
  })

   this.fg=this.fb.group({
    pname:[],
    page:[],
    padharno:[],
    pgender:[]
    
   })
  }
  onSubmit(){
    alert("Ticket booked successfully")
    console.log(this.fg.value)
    this.src.savepassenger(this.fg.value).subscribe();
    console.log(this.fg.value);

    this.pname=this.fg.controls['pname'].value;
    this.page=this.fg.controls['page'].value;
    this.padharno=this.fg.controls['padharno'].value;
    this.pgender=this.fg.controls['pgender'].value;

  }


}
