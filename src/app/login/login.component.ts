import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';
  invalidLogin=false;

  constructor(private loginServ:LoginService, private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  myForm = this.fb.group({
    userName : ['',[Validators.required]],
    userPassword : ['',[Validators.required]]
  })

  get userName(){
    return this.myForm.controls.userName;
  }

  get userPassword(){
    return this.myForm.controls.userPassword;
  }
  
  onSubmit(){
    this.loginServ.loginUserFromRemote(this.user).subscribe(data=>{
      if(this.user.userName===this.myForm.value.userName){ //&& this.user.userPassword===this.myForm.value.userPassword){
        sessionStorage.setItem('userName',this.user.userName);
        console.log("response received");
      this.route.navigate(["/landingpage"]);
      this.invalidLogin=true;
      }
      //console.log("response received");
      //this.route.navigate(["/landingpage"]);
      //this.invalidLogin=true;
    },
    error=>{
      console.log("exception occurred");
      this.msg="Bad Credentials, please enter again";
      this.invalidLogin=false;
    }
    )
  }

  //Sign Up
  SignUpform = this.fb.group({
    name : ['',[Validators.required]],
    username : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })

  get name(){
    return this.SignUpform.controls.name;
  }
  
  get username(){
    return this.SignUpform.controls.username;
  }

  get password(){
    return this.SignUpform.controls.password;
  }
  saveUser(){
    this.loginServ.addUser(this.user).subscribe(data => {
      //console.log(data);
      //this.route.navigate(['/login'])
      alert("Registered Successfully!!");
    },
    error=>console.error(error));
  }

  onClick(){
    //console.log(this.user);
    this.saveUser();
    //alert('User registered!');
    this.SignUpform.reset();
  }
}
