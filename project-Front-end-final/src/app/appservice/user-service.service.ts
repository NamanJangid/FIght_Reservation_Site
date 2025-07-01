import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../appmodel/card';
import { LoginStatus } from '../appmodel/login-status';
import { RegisterStatus } from '../appmodel/register-status';
import { Schedule } from '../appmodel/schedule';
import { User } from '../appmodel/user';
import { UserFlightSearch } from '../appmodel/user-flight-search';
import { UserLoginDto } from '../appmodel/user-login-dto';
import { UserAccountBalance } from '../appmodel/UserAccountBalance';
import { Payment } from '../payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  login(userLoginDto: UserLoginDto):Observable<LoginStatus>{
    return this.httpClient.post<LoginStatus>("http://localhost:8181/login-user",userLoginDto);
  }

  register(user:User):Observable<RegisterStatus>{
    return this.httpClient.post<RegisterStatus>("http://localhost:8181/register",user);
  }

  fetchOneWayFlights(userSearch: UserFlightSearch) : Observable<object> {
    let url = "http://localhost:8181/available-flights";
    return this.httpClient.post(url, userSearch);
  }

  fetchReturnTripFlights(userSearch: UserFlightSearch) : Observable<object> {
    let url = "http://localhost:8181/return-trip-flights";
    return this.httpClient.post(url, userSearch);
  }

  invoice(ticketNo:number){
    this.httpClient.get("http://localhost:8181/testing"+ticketNo);
  }

  payment(userAccountBalance: UserAccountBalance) :Observable<string> {
    
    return this.httpClient.post<string>("http://localhost:8181/balance-deduction",userAccountBalance);
  }

  cardDetails(card:Payment) :Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8181/payment",card);
  }
}
