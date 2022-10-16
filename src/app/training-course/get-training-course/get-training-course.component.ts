import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Trainingcourse } from '../trainingcourse';
import { TrainingcourseService } from '../trainingcourse.service';

@Component({
  selector: 'app-get-training-course',
  templateUrl: './get-training-course.component.html',
  styleUrls: ['./get-training-course.component.css']
})
export class GetTrainingCourseComponent implements OnInit {

  trainingCourse:Trainingcourse[]=[];

  constructor(private trainingCourseServ:TrainingcourseService, public loginServ:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.gettrainingcourse();
  }

  private gettrainingcourse(){
    this.trainingCourseServ.getCourseList().subscribe(data => {
      this.trainingCourse = data;
    });
  }

  updateTrainingCourse(trainingCourseId: number){
    this.route.navigate(['/updatetrainingcourse', trainingCourseId]);
  }

  trainingCourseDetails(trainingCourseId: number){
    this.route.navigate(['/gettrainingcoursebyid', trainingCourseId]);
  }

  deleteTrainingCourse(trainingCourseId: number){
    this.trainingCourseServ.deleteTrainingCourse(trainingCourseId).subscribe( (data: any) => {
      console.log(data);
      this.gettrainingcourse();
    })
  }

}