import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-get-ngo-id',
  templateUrl: './get-ngo-id.component.html',
  styleUrls: ['./get-ngo-id.component.css']
})
export class GetNgoIdComponent implements OnInit {

  ngoId:any;
  ngo:Ngo=new Ngo;

  constructor(private route:Router, private ngoServ:NgoService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.ngoId = this.activate.snapshot.params['ngoId'];

    this.ngo = new Ngo();
    this.ngoServ.getNgoById(this.ngoId).subscribe( data => {
      this.ngo = data;
    });
  }

}
