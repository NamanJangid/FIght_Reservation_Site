import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Passenger} from '../appmodel/passenger';
@Component({
  selector: 'passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  constructor(private router:Router) { }

  flight : [];
  passenger = new Passenger()
  passengerList = [];
  noOfPass : number;

  ngOnInit(){
    this.passenger = new Passenger();
    this.passengerList.push(this.passenger);
    this.flight =JSON.parse(sessionStorage.getItem('flight'));
    this.noOfPass =JSON.parse(sessionStorage.getItem('noOfPassengers'));
  }

  addForm(){
    this.noOfPass--;
    this.passenger = new Passenger();
    this.passengerList.push(this.passenger);
  }
  onsubmit(){
    
    console.log(this.passengerList);
    //alert(JSON.stringify(this.passengerList));
    sessionStorage.setItem('passengerList',JSON.stringify(this.passengerList));
    //this.passengerList = [];
    this.router.navigate(['/user/seats']);
  }

  removeForm(index){
    this.passengerList.splice(index,1);
    console.log(this.passengerList);
  }

}
