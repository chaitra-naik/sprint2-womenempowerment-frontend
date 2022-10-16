import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-get-trainee-id',
  templateUrl: './get-trainee-id.component.html',
  styleUrls: ['./get-trainee-id.component.css']
})
export class GetTraineeIdComponent implements OnInit {

  traineeId : any;
  trainee:Trainee=new Trainee;

  constructor(private route:Router, private traineeServ:TraineeService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.traineeId = this.activate.snapshot.params['traineeId'];

    this.trainee = new Trainee();
    this.traineeServ.getTraineeById(this.traineeId).subscribe( data => {
      this.trainee = data;
    });
  }

}
