import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

  trainees:Trainee[]=[];

  constructor(private traineeServ:TraineeService, public loginServ:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.getTrainees();
  }

  private getTrainees(){
    this.traineeServ.getTraineeList().subscribe(data => {
      this.trainees = data;
    });
  }

  updateTrainee(traineeId: number){
    this.route.navigate(['/updatetrainee', traineeId]);
  }

  traineeDetails(traineeId: number){
    this.route.navigate(['/gettraineebyid', traineeId]);
  }

  deleteTrainee(traineeId: number){
    this.traineeServ.deleteTrainee(traineeId).subscribe( (data: any) => {
      console.log(data);
      this.getTrainees();
    })
  }

}
