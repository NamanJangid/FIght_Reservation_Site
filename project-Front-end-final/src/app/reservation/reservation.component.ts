import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  selectedFlights: [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedFlights = JSON.parse(sessionStorage.getItem('flight'));
  }

  proceed(){
    this.router.navigate(['user/passengers'])
  }

}
