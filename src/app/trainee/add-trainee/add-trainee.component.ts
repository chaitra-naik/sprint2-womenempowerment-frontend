import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.css']
})
export class AddTraineeComponent implements OnInit {

  trainee : Trainee = new Trainee();

  constructor(private traineeServ: TraineeService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  traineeform = this.fb.group({
    traineeId : ['',[Validators.required]],
    firstName : ['',[Validators.required]],
    lastName : ['',[Validators.required]],
    email :  ['',[Validators.required]],
    familyInfo :  ['',[Validators.required]],
    location :  ['',[Validators.required]],
    contact :  ['',[Validators.required]],
    aadharNo :  ['',[Validators.required]],
    dob :  ['',[Validators.required]]
  })

  get traineeId(){
    return this.traineeform.controls.traineeId;
  }
  
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
  
  saveTrainee(){
    this.traineeServ.addTrainee(this.trainee).subscribe(data => {
      console.log(data);
      this.goToTraineeList();
    },
    error=>console.error(error));
  }

  goToTraineeList(){
    this.router.navigate(['/traineelist']);
  }

  onSubmit(){
    console.log(this.trainee);
    this.saveTrainee();
  }

}
