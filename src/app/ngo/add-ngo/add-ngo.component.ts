import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.css']
})
export class AddNgoComponent implements OnInit {

  ngo: Ngo = new Ngo();

  constructor(private ngoServ: NgoService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  ngoform = this.fb.group({
    ngoId : ['',[Validators.required]],
    ngoName : ['',[Validators.required]],
    ngoLocation : ['',[Validators.required]],
    ngoType :  ['',[Validators.required]],
    ngoMotive :  ['',[Validators.required]],
    donation :  ['',[Validators.required]],
    ngoSize :  ['',[Validators.required]],
    ngoActivities :  ['',[Validators.required]]
  })

  get ngoId(){
    return this.ngoform.controls.ngoId;
  }
  
  get ngoName(){
    return this.ngoform.controls.ngoName;
  }

  get ngoLocation(){
    return this.ngoform.controls.ngoLocation;
  }

  get ngoType(){
    return this.ngoform.controls.ngoType;
  }
  
  get ngoMotive(){
    return this.ngoform.controls.ngoMotive;
  }

  get donation(){
    return this.ngoform.controls.donation;
  }
  
  get ngoSize(){
    return this.ngoform.controls.ngoSize;
  }

  get ngoActivities(){
    return this.ngoform.controls.ngoActivities;
  }
  
  saveNgo(){
    this.ngoServ.addNgo(this.ngo).subscribe(data => {
      console.log(data);
      this.goToNgoList();
    },
    error=>console.error(error));
  }

  goToNgoList(){
    this.router.navigate(['/ngolist']);
  }

  onSubmit(){
    console.log(this.ngo);
    this.saveNgo();
  }
}
