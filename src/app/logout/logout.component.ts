import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router, private loginServ:LoginService) { }

  ngOnInit(): void {
    this.loginServ.logOut();
    this.route.navigate(['landingpage']);
  }

}
