import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteFlight } from '../appmodel/delete-flight';
import { Flight } from '../appmodel/flight';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})
export class FlightStatusComponent {

  headers: string[];
  changeStatus:DeleteFlight = new DeleteFlight();
  f:Flight;
  flight: Flight[];
  constructor(private router: Router, private adminService: AdminServiceService) { 
    this.adminService.searchAllFLight().subscribe(data=>{
      this.flight = data;
      console.log(this.flight);
    });
    this.headers=[
      "Flight No","Source","Destination","Duration","Status"
    ];
  }
  
  change(flight){
    this.f = flight;
    this.changeStatus.id = this.f.flightNo;
    if(this.f.status=="ACTIVE"){
      this.changeStatus.status = "INACTIVE";
    }  
    else{
      this.changeStatus.status = "ACTIVE";
    }
    
    this.adminService.changeStatus(this.changeStatus).subscribe(data=>{
      window.location.reload();
    });
  }
}
