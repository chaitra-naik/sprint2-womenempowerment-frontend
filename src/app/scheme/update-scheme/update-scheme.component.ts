import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-update-scheme',
  templateUrl: './update-scheme.component.html',
  styleUrls: ['./update-scheme.component.css']
})
export class UpdateSchemeComponent implements OnInit {

  schemeId:any;
  scheme: Scheme = new Scheme();

  constructor(private schemeServ:SchemeService, private route:Router, private activate:ActivatedRoute, private fb:FormBuilder) { }

  schemeform = this.fb.group({
    schemeName : ['',[Validators.required]],
    schemeType :  ['',[Validators.required]],
    schemeLaunchDate :  ['',[Validators.required]],
    schemeEligibility :  ['',[Validators.required]],
    schemeObjective :  ['',[Validators.required]],
  })
  
  get schemeName(){
    return this.schemeform.controls.schemeName;
  }

  get schemeType(){
    return this.schemeform.controls.schemeType;
  }

  get schemeLaunchDate(){
    return this.schemeform.controls.schemeLaunchDate;
  }
  
  get schemeEligibility(){
    return this.schemeform.controls.schemeEligibility;
  }

  get schemeObjective(){
    return this.schemeform.controls.schemeObjective;
  }

  ngOnInit(): void {
    this.schemeId = this.activate.snapshot.params['schemeId'];

    this.schemeServ.getSchemeById(this.schemeId).subscribe((data: any) => {
      this.scheme = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.schemeServ.updateScheme(this.schemeId,this.scheme).subscribe( (data: any) =>{
      this.goToSchemeList();
    }
    , (error: any) => console.log(error));
  }

  goToSchemeList(){
    this.route.navigate(['/getschemes']);
  }

}
