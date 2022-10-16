import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) { }

  getFeedbackList(): Observable<Feedback[]>{
    return this.httpclient.get<Feedback[]>(`${"http://localhost:8080/feedbacks"}`);
  }

  addFeedback(feedback: Feedback): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/feedback"}`, feedback);
  }

}
