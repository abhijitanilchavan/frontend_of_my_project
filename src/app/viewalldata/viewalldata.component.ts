import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewalldata',
  templateUrl: './viewalldata.component.html',
  styleUrls: ['./viewalldata.component.css']
})
export class ViewalldataComponent implements OnInit {
constructor(private src:BusService,private router:Router){}
st:any;
  ngOnInit(): void {

    this.src.viewallrecord().subscribe((s:any)=>{
this.st=s;

    })
    
  }
  ondelete(busno:any){
    alert("delete"+busno);
    this.src.deletebybusno(busno).subscribe();
    window.location.reload();
  }
  onsee(busno:any){
    alert("see"+busno);
    this.router.navigate(['/seesingledata',busno]);
  }
  onedit(busno:any){
    alert("edit"+busno)
    this.router.navigate(['/editpage',busno]);

  }


    
  }


