import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../appservice/user-service.service';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  data:any[]=[];
  pass:any[]=[];
  totalFare:number;
  noOfPass:number;
  fare:number;

  constructor(private router:Router, private userService:UserServiceService) {
    this.userService.invoice;
   }

  ngOnInit(): void {
    this.data=JSON.parse(sessionStorage.getItem('flight'));
    this.pass=JSON.parse(sessionStorage.getItem('passengerList'));
    this.totalFare=JSON.parse(sessionStorage.getItem('totalFare'));
    this.noOfPass=JSON.parse(sessionStorage.getItem('noOfPassengers'));
    this.calculation();

  }

  calculation(){
    this.fare=this.totalFare/this.noOfPass;
  }
  
}
