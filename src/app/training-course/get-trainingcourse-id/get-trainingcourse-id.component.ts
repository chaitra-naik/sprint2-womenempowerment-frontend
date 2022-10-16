import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Trainingcourse } from '../trainingcourse';
import { TrainingcourseService } from '../trainingcourse.service';

@Component({
  selector: 'app-get-trainingcourse-id',
  templateUrl: './get-trainingcourse-id.component.html',
  styleUrls: ['./get-trainingcourse-id.component.css']
})
export class GetTrainingcourseIdComponent implements OnInit {

  trainingCourseId:any;
  trainingCourse:Trainingcourse=new Trainingcourse;

  constructor(private route:Router, private trainingcourseServ:TrainingcourseService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.trainingCourseId = this.activate.snapshot.params['trainingCourseId'];

    this.trainingCourse = new Trainingcourse();
    this.trainingcourseServ.getTrainingCourseById(this.trainingCourseId).subscribe( data => {
      this.trainingCourse = data;
    });
  }

}
