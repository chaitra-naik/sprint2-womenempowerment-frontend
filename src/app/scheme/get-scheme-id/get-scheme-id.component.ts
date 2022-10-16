import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-get-scheme-id',
  templateUrl: './get-scheme-id.component.html',
  styleUrls: ['./get-scheme-id.component.css']
})
export class GetSchemeIdComponent implements OnInit {

  schemeId:any;
  scheme:Scheme=new Scheme;

  constructor(private route:Router, private schemeServ:SchemeService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.schemeId = this.activate.snapshot.params['schemeId'];

    this.scheme = new Scheme();
    this.schemeServ.getSchemeById(this.schemeId).subscribe( data => {
      this.scheme = data;
    });
  }

}
