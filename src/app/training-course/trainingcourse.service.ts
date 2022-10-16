import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainingcourse } from './trainingcourse';

@Injectable({
  providedIn: 'root'
})
export class TrainingcourseService {

  constructor(private httpclient:HttpClient) { }

  getCourseList(): Observable<Trainingcourse[]>{
    return this.httpclient.get<Trainingcourse[]>(`${"http://localhost:8080/trainingcourses"}`);
  }

  addTrainingCourse(trainingCourse: Trainingcourse): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/trainingcourse"}`, trainingCourse);
  }

  updateTrainingCourse(trainingCourseId:any,trainingCourse:Trainingcourse): Observable<Object>{
    return this.httpclient.put(`${"http://localhost:8080/updatetrainingcourse"}/${trainingCourseId}`, trainingCourse);
  }

  deleteTrainingCourse(trainingCourseId:any):Observable<Object>{
    return this.httpclient.delete(`${"http://localhost:8080/trainingCourse"}/${trainingCourseId}`);
  } 

  getTrainingCourseById(trainingCourseId:any):Observable<Trainingcourse>{
    return this.httpclient.get<Trainingcourse>(`${"http://localhost:8080/trainingCourse"}/${trainingCourseId}`);
}
}
