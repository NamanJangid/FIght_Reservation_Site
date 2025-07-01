import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../appmodel/flight';
import { SearchFlightDto } from '../appmodel/search-flight-dto';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'search-flight-id',
  templateUrl: './search-flight-id.component.html',
  styleUrls: ['./search-flight-id.component.css']
})
export class SearchFlightIdComponent {

  searchFlightId: SearchFlightDto = new SearchFlightDto();
  show:boolean=false;
  flight:Flight = new Flight();
  headers:string[];

  constructor(private router: Router, private adminService: AdminServiceService) {
    this.headers=[
      "Flight No","Source","Destination","Duration","Status"
    ];
   }

  search(){
    this.adminService.searchFlightId(this.searchFlightId).subscribe(data=>{
      this.flight = data;
      if(data!=null){
        this.show = true;
      } 
      else{
        alert("No Such Flight is Available!");
      }
    });
  }

}