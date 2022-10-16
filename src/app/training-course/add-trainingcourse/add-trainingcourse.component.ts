import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainingcourse } from '../trainingcourse';
import { TrainingcourseService } from '../trainingcourse.service';

@Component({
  selector: 'app-add-trainingcourse',
  templateUrl: './add-trainingcourse.component.html',
  styleUrls: ['./add-trainingcourse.component.css']
})
export class AddTrainingcourseComponent implements OnInit {

  trainingCourse: Trainingcourse = new Trainingcourse();
  
  constructor(private trainingCourseServ:TrainingcourseService, private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  trainingCourseform = this.fb.group({
    trainingCourseId: ['',[Validators.required]],
    courseName : ['',[Validators.required]],
    courseDuration : ['',[Validators.required]],
    startingDate:  ['',[Validators.required]],
    endingDate :  ['',[Validators.required]],
    courseCompletionStatus :  ['',[Validators.required]],
   
  })

  get trainingCourseId(){
    return this.trainingCourseform.controls.trainingCourseId;
  }

  get courseName(){
    return this.trainingCourseform.controls.courseName;
  }

  get startingDate(){
    return this.trainingCourseform.controls.startingDate;
  }

  get endingDate(){
    return this.trainingCourseform.controls.endingDate;
  }

  get courseDuration(){
    return this.trainingCourseform.controls.courseDuration;
  }

  get courseCompletionStatus(){
    return this.trainingCourseform.controls.courseCompletionStatus;
  }

  saveTrainingCourse(){
    this.trainingCourseServ.addTrainingCourse(this.trainingCourse).subscribe(data => {
      console.log(data);
      this.goToTrainingCourseList();
    },
    error=>console.error(error));
  }

  goToTrainingCourseList(){
    this.route.navigate(['/trainingcourselist']);
  }

  onSubmit(){
    console.log(this.trainingCourse);
    this.saveTrainingCourse();
  }

}
