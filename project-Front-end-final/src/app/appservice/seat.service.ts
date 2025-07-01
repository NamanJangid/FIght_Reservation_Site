import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PassengerBookings } from '../appmodel/PassengerBookings';
import { BookedSeat } from '../appmodel/seat';
import { Status } from '../appmodel/Status';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private httpClient :HttpClient) { }

  getBookedSeats(bookedSeats: BookedSeat): Observable<any>{
    let url = "http://localhost:8181/booked-seats";
    return this.httpClient.post(url, bookedSeats);
  }

  storePassengers(passengerBookings : PassengerBookings): Observable<Status>{
    let url = "http://localhost:8181/adding-passengers";
    return this.httpClient.post<Status>(url,passengerBookings);
  }

  getFare(flightNo: number, seatNo: string): Observable<any>{
    let url = "http://localhost:8181/get-fare?flightNo=";
    return this.httpClient.get<number>(url+flightNo+seatNo);
  }
}
