import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.css']
})
export class SchemeListComponent implements OnInit {

  schemes:Scheme[]=[];

  constructor(private schemeServ:SchemeService, public loginServ:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.getSchemes();
  }

  private getSchemes(){
    this.schemeServ.getSchemeList().subscribe(data => {
      this.schemes = data;
    });
  }

  updateScheme(schemeId: number){
    this.route.navigate(['/updatescheme', schemeId]);
  }

  schemeDetails(schemeId: number){
    this.route.navigate(['/getschemebyid', schemeId]);
  }

  deleteScheme(schemeId: number){
    this.schemeServ.deleteScheme(schemeId).subscribe( (data: any) => {
      console.log(data);
      this.getSchemes();
    })
  }

}
