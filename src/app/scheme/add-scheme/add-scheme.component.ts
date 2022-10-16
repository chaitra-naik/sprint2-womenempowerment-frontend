import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.css']
})
export class AddSchemeComponent implements OnInit {

  scheme: Scheme = new Scheme();

  constructor(private schemeServ: SchemeService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  schemeform = this.fb.group({
    schemeId : ['',[Validators.required]],
    schemeName : ['',[Validators.required]],
    schemeType :  ['',[Validators.required]],
    schemeLaunchDate :  ['',[Validators.required]],
    schemeEligibility :  ['',[Validators.required]],
    schemeObjective :  ['',[Validators.required]],
  })

  get schemeId(){
    return this.schemeform.controls.schemeId;
  }
  
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


  saveScheme(){
    this.schemeServ.addScheme(this.scheme).subscribe(data => {
      console.log(data);
      this.goToSchemeList();
    },
    error=>console.error(error));
  }

  goToSchemeList(){
    this.router.navigate(['/getschemes']);
  }

  onSubmit(){
    console.log(this.scheme);
    this.saveScheme();
  }

}
