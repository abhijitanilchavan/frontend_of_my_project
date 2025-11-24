import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../bus.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  constructor(private ac:ActivatedRoute,private src:BusService,private fb:FormBuilder,private router:Router){}

  fg!:FormGroup;


  st:any[]=[];


  ngOnInit(): void {
    const busno=this.ac.snapshot.paramMap.get('busno');
    this.src.getsinglerecord(busno).subscribe((s:any)=>{
    this.st=s;

     this.fg.patchValue({
      busno:s.busno,
      name:s.name,
      toLocation:s.toLocation,
      fromLocation:s.fromLocation,
      price:s.price

     

    })

    })

    this.fg=this.fb.group({
      busno:[],
      name:[],
      toLocation:[],
      fromLocation:[],
      price:[]


   

    })

  }
  onupdate(){
    alert("update")
    this.src.saverecord(this.fg.value).subscribe();
    this.router.navigateByUrl('/Viewalldata');
 
    
  }

}
