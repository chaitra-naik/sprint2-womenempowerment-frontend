import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.css']
})
export class UpdateTraineeComponent implements OnInit {
  traineeId : any;
  trainee: Trainee = new Trainee();

  constructor(private traineeServ:TraineeService, private route:Router, private activate:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.traineeId = this.activate.snapshot.params['traineeId'];

    this.traineeServ.getTraineeById(this.traineeId).subscribe((data: any) => {
      this.trainee = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.traineeServ.updateTrainee(this.traineeId,this.traineeId).subscribe( (data: any) =>{
      this.goToTraineeList();
    }
    , (error: any) => console.log(error));
  }

  goToTraineeList(){
    this.route.navigate(['/traineelist']);
  }

  traineeform = this.fb.group({
    firstName : ['',[Validators.required]],
    lastName : ['',[Validators.required]],
    email :  ['',[Validators.required]],
    familyInfo :  ['',[Validators.required]],
    location :  ['',[Validators.required]],
    contact :  ['',[Validators.required]],
    aadharNo :  ['',[Validators.required]],
    dob :  ['',[Validators.required]]
  })

  get firstName(){
    return this.traineeform.controls.firstName;
  }

  get lastName(){
    return this.traineeform.controls.lastName;
  }

  get email(){
    return this.traineeform.controls.email;
  }
  
  get familyInfo(){
    return this.traineeform.controls.familyInfo;
  }

  get location(){
    return this.traineeform.controls.location;
  }
  
  get contact(){
    return this.traineeform.controls.contact;
  }

  get aadharNo(){
    return this.traineeform.controls.aadharNo;
  }

  get dob(){
    return this.traineeform.controls.dob;
  }
}
