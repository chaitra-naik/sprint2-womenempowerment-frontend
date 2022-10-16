import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url="http://localhost:8080/Userlogin";

  constructor(private httpClient:HttpClient) { }

  user:User=new User();

  public loginUserFromRemote(user:User):Observable<any>{
      //sessionStorage.setItem('userName',user.userName)
      return this.httpClient.post<any>(`${this.url}`,user)
    //sessionStorage.setItem('userName',user.userName)
    //sessionStorage.setItem('userPassword',user.userPassword);
    //return this.httpClient.post<any>(`${this.url}`,user)
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('userName')
    //let password=sessionStorage.getItem('userPassword');
    //console.log(!(user===null))
    console.log(!(user==this.user.userName))
    return !(user==this.user.userName)
    //return !(user===null)
  }

  logOut(){
    sessionStorage.removeItem('userName')
    //sessionStorage.removeItem('userPassword');
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/User"}`, user);
  }
}
