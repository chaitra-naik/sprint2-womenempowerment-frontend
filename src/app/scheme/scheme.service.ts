import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheme } from './scheme';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(private httpclient:HttpClient) { }

  getSchemeList(): Observable<Scheme[]>{
    return this.httpclient.get<Scheme[]>(`${"http://localhost:8080/schemes"}`);
  }

  addScheme(scheme: Scheme): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/scheme"}`, scheme);
  }

  getSchemeById(schemeId: any): Observable<Scheme>{
    return this.httpclient.get<Scheme>(`${"http://localhost:8080/scheme"}/${schemeId}`);
  }

  updateScheme(schemeId:any, scheme: Scheme): Observable<Object>{
    return this.httpclient.put(`${"http://localhost:8080/updatescheme"}/${schemeId}`, scheme);
  }

  deleteScheme(schemeId:any):Observable<Object>{
    return this.httpclient.delete(`${"http://localhost:8080/scheme"}/${schemeId}`);
  }
}
