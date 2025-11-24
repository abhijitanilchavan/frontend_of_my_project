import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  constructor(private fb:FormBuilder,private sr:BusService){}
  fg!:FormGroup;




  ngOnInit(): void {
    this.fg=this.fb.group({
     busno:[],
     name:[],
     toLocation:[],
     fromLocation:[],
     price:[]

    })
  }

  call(){
   
    console.log(this.fg.value);
    this.sr.saverecord(this.fg.value).subscribe();
     alert("saved");
  }




}
