import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor( private htcl:HttpClient) { }

  getrecord(to:any,from:any){
    return this.htcl.get(`http://localhost:8080/findbylocation/${to}/${from}`);
  }

  saverecord(st:any){
 return this.htcl.post('http://localhost:8080/savedata',st);
  }
  viewallrecord(){
    return this.htcl.get('http://localhost:8080/getdata');
  }
  deletebybusno(busno:any){
    return this.htcl.delete('http://localhost:8080/delete/'+busno);
  }
  getsinglerecord(busno:any){
    return this.htcl.get('http://localhost:8080/busno/'+busno);
  }

  usersave(us:any){
    return this.htcl.post('http://localhost:8080/postdata',us);

  }

  checkuser(username: any, password: any) {
  return this.htcl.get(`http://localhost:8080/search/${username}/${password}`);
}


savepassenger(psg:any){

  return this.htcl.post('http://localhost:8080/savepassenger',psg);
}


}
