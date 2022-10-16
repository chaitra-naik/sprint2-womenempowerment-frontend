import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ngo } from './ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  private baseURL="http://localhost:8080/ngos";

  constructor(private httpclient:HttpClient) { }

  getNgoList(): Observable<Ngo[]>{
    return this.httpclient.get<Ngo[]>(`${this.baseURL}`);
  }

  addNgo(ngo: Ngo): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/ngo"}`, ngo);
  }

  getNgoById(ngoId: any): Observable<Ngo>{
    return this.httpclient.get<Ngo>(`${"http://localhost:8080/ngo"}/${ngoId}`);
  }

  updateNgo(ngoId:any, ngo: Ngo): Observable<Object>{
    return this.httpclient.put(`${"http://localhost:8080/ngo"}/${ngoId}`, ngo);
  }

  deleteNgo(ngoId:any):Observable<Object>{
    return this.httpclient.delete(`${"http://localhost:8080/deletengo"}/${ngoId}`);
  }
}
