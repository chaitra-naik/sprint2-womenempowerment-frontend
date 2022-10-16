import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private httpclient:HttpClient) { }

  getTraineeList(): Observable<Trainee[]>{
    return this.httpclient.get<Trainee[]>(`${"http://localhost:8080/trainees"}`);
  }

  addTrainee(trainee: Trainee): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/trainee"}`, trainee);
  }

  getTraineeById(traineeId: any): Observable<Trainee>{
    return this.httpclient.get<Trainee>(`${"http://localhost:8080/viewtraineebyid"}/${traineeId}`);
  }

  updateTrainee(traineeId:any, trainee: Trainee): Observable<Object>{
    return this.httpclient.put(`${"http://localhost:8080/trainee"}/${traineeId}`, trainee);
  }

  deleteTrainee(traineeId:any):Observable<Object>{
    return this.httpclient.delete(`${"http://localhost:8080/trainee"}/${traineeId}`);
  }
}
