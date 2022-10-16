import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-update-ngo',
  templateUrl: './update-ngo.component.html',
  styleUrls: ['./update-ngo.component.css']
})
export class UpdateNgoComponent implements OnInit {
  ngoId:any;
  ngo: Ngo = new Ngo();

  constructor(private ngoServ:NgoService, private route:Router, private activate:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ngoId = this.activate.snapshot.params['ngoId'];

    this.ngoServ.getNgoById(this.ngoId).subscribe((data: any) => {
      this.ngo = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.ngoServ.updateNgo(this.ngoId,this.ngo).subscribe( (data: any) =>{
      this.goToNgoList();
    }
    , (error: any) => console.log(error));
  }

  goToNgoList(){
    this.route.navigate(['/ngolist']);
  }

  ngoform = this.fb.group({
    ngoName : ['',[Validators.required]],
    ngoLocation : ['',[Validators.required]],
    ngoType :  ['',[Validators.required]],
    ngoMotive :  ['',[Validators.required]],
    donation :  ['',[Validators.required]],
    ngoSize :  ['',[Validators.required]],
    ngoActivities :  ['',[Validators.required]]
  })
  
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

}
