import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../appservice/reservation.service';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent implements OnInit {

  ticketNo: number;
  passengers: any;

  message: string;

  constructor(private service: ReservationService) { }

  ngOnInit(): void {
  }

  fetchPassengersDetails(){
    this.service.fetchPassengersByTicketNo(this.ticketNo).subscribe(data=>{
      this.passengers = data;
    })
  }

  cancelReservation(){
    this.service.cancelReservationForAllPassengers(this.ticketNo).subscribe(data=>{
      this.message = data['message'];
    })
  }

  cancelPassengerReservation(passengerId: number){
    this.service.cancelReservationForSinglePassenger(this.ticketNo,passengerId).subscribe(data => {
      this.message = data['message'];
    })
  }

}
