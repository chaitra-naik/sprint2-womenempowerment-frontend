import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks:Feedback[]=[];

  constructor(private feedbackServ:FeedbackService, public loginServ:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  private getFeedbacks(){
    this.feedbackServ.getFeedbackList().subscribe(data => {
      this.feedbacks = data;
    });
  }

}
