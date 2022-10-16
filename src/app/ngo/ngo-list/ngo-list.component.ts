import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {

  ngos:Ngo[]=[];
  p : number =1;
  ngoLocation:any;

  constructor(private ngoServ:NgoService, public loginServ:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.getNgos();
  }

  private getNgos(){
    this.ngoServ.getNgoList().subscribe(data => {
      this.ngos = data;
    });
  }

  updateNgo(ngoId: number){
    this.route.navigate(['/updatengo', ngoId]);
  }

  ngoDetails(ngoId: number){
    this.route.navigate(['/getngobyid', ngoId]);
  }

  deleteNgo(ngoId: number){
    this.ngoServ.deleteNgo(ngoId).subscribe( (data: any) => {
      console.log(data);
      this.getNgos();
    })
  }

  Search(){
    if(this.ngoLocation == ""){
      this.ngOnInit();
    }else{
      this.ngos = this.ngos.filter(res=>{
        return res.ngoLocation.match(this.ngoLocation);
      });
    }
  }

}
