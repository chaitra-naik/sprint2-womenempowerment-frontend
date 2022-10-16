import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainingcourse } from '../trainingcourse';
import { TrainingcourseService } from '../trainingcourse.service';

@Component({
  selector: 'app-update-trainingcourse',
  templateUrl: './update-trainingcourse.component.html',
  styleUrls: ['./update-trainingcourse.component.css']
})
export class UpdateTrainingcourseComponent implements OnInit {

  trainingCourse: Trainingcourse = new Trainingcourse();
  trainingCourseId : any;
  
  constructor(private trainingCourseServ: TrainingcourseService, private route: Router,private activate:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.trainingCourseId = this.activate.snapshot.params['trainingCourseId'];

    this.trainingCourseServ.getTrainingCourseById(this.trainingCourseId).subscribe((data: any) => {
      this.trainingCourse = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.trainingCourseServ.updateTrainingCourse(this.trainingCourseId,this.trainingCourse).subscribe( (data: any) =>{
      this.goToTrainingCourseList();
    }
    , (error: any) => console.log(error));
  }

  goToTrainingCourseList(){
    this.route.navigate(['/trainingcourselist']);
  }


  trainingCourseform = this.fb.group({
    courseName : ['',[Validators.required]],
    courseDuration : ['',[Validators.required]],
    startingDate:  ['',[Validators.required]],
    endingDate :  ['',[Validators.required]],
    courseCompletionStatus :  ['',[Validators.required]],
   
  })

  get courseName(){
    return this.trainingCourseform.controls.courseName;
  }

  get courseDuration(){
    return this.trainingCourseform.controls.courseDuration;
  }

  get startingDate(){
    return this.trainingCourseform.controls.startingDate;
  }

  get endingDate(){
    return this.trainingCourseform.controls.endingDate;
  }

  get courseCompletionStatus(){
    return this.trainingCourseform.controls.courseCompletionStatus;
  }

}
