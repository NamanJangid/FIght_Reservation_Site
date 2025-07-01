import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  fetchPassengersByTicketNo(ticketNo: number): Observable<object>{
    let url = "http://localhost:8181/fetch-passengers?ticketNo="+ticketNo;
    return this.http.get(url);
  }

  cancelReservationForAllPassengers(ticketNo: number): Observable<object>{
    let url = "http://localhost:8181/cancel-reservation?ticketNo="+ticketNo;
    return this.http.post(url, ticketNo);
  }

  cancelReservationForSinglePassenger(ticketNo: number, passengerId: number): Observable<object>{
    let url = "http://localhost:8181/cancel-passenger-booking?ticketNo="+ticketNo+"&passengerId="+passengerId;
    return this.http.get(url);
  }
}
