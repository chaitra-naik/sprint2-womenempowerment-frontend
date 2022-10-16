import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback();

  constructor(private feedbackServ: FeedbackService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  feedbackform = this.fb.group({
    rating : ['',[Validators.required]],
    comments : ['',[Validators.required]],
    feedbackdate :  ['',[Validators.required]]
  })

  get rating(){
    return this.feedbackform.controls.rating;
  }
  
  get comments(){
    return this.feedbackform.controls.comments;
  }

  get feedbackdate(){
    return this.feedbackform.controls.feedbackdate;
  }
  
  saveFeedback(){
    this.feedbackServ.addFeedback(this.feedback).subscribe(data => {
      console.log(data);
      this.goToFeedbackList();
    },
    error=>console.error(error));
  }

  goToFeedbackList(){
    this.router.navigate(['/feedbacklist']);
  }

  onSubmit(){
    console.log(this.feedback);
    this.saveFeedback();
  }

}
