import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../appmodel/admin';
import { DeleteFlight } from '../appmodel/delete-flight';
import { Flight } from '../appmodel/flight';
import { FlightAddStatus } from '../appmodel/flight-add-status';
import { LoginStatus } from '../appmodel/login-status';
import { Schedule } from '../appmodel/schedule';
import { SearchActiveFlightSD } from '../appmodel/search-active-flight-sd';
import { SearchFlightDto } from '../appmodel/search-flight-dto';
import { SearchFlightSDDto } from '../appmodel/search-flight-sddto';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient: HttpClient) { }

  login(admin:Admin):Observable<LoginStatus>{
    return this.httpClient.post<LoginStatus>("http://localhost:8181/login-admin",admin);
  }

  addFlight(flight:Flight):Observable<FlightAddStatus>{
    return this.httpClient.post<FlightAddStatus>("http://localhost:8181/add-flight",flight);
  }

  searchFlightId(searchFLightDto:SearchFlightDto):Observable<Flight>{
    return this.httpClient.post<Flight>("http://localhost:8181/search-flight-by-id",searchFLightDto);
  }

  searchFlightSD(searchFlightSDDto:SearchFlightSDDto):Observable<Flight[]>{
    return this.httpClient.post<Flight[]>("http://localhost:8181/search-flight-sd",searchFlightSDDto);
  }

  searchFlightByStatus(searchActiveFightSD:SearchActiveFlightSD):Observable<Flight[]>{
    return this.httpClient.post<Flight[]>("http://localhost:8181/search-flight-active-sd",searchActiveFightSD);
  }

  searchAllFLight():Observable<Flight[]>{
    return this.httpClient.get<Flight[]>("http://localhost:8181/all-flight");
  }

  changeStatus(changeStatus:DeleteFlight):Observable<Flight>{
    return this.httpClient.post<Flight>("http://localhost:8181/delete-flight",changeStatus);
  }

  addScheduleForFlight(schedule: Schedule) : Observable<object> {
    let url = "http://localhost:8181/add-schedule";
    return this.httpClient.post(url, schedule);
  }
}
