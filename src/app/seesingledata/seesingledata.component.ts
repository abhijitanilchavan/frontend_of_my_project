import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seesingledata',
  templateUrl: './seesingledata.component.html',
  styleUrls: ['./seesingledata.component.css']
})
export class SeesingledataComponent implements OnInit {
  constructor(private src:BusService,private ac:ActivatedRoute){}
  st:any;
  
  ngOnInit(): void {
   const busno=this.ac.snapshot.paramMap.get('busno');
   this.src.getsinglerecord(busno).subscribe((s:any)=>{
    this.st=s;
   })
    
  }

}
