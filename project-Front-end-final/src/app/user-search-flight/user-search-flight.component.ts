import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFlightSearch } from '../appmodel/user-flight-search';
import { UserServiceService } from '../appservice/user-service.service';

@Component({
  selector: 'user-search-flight',
  templateUrl: './user-search-flight.component.html',
  styleUrls: ['./user-search-flight.component.css']
})
export class UserSearchFlightComponent implements OnInit {

  trip: boolean;
  airports: string[];
  results: [];
  flightSearch: UserFlightSearch = new UserFlightSearch();
  selectedFlights: object[]=[];
  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.airports = ["Agartala","Agatti Island","Agra","Ahmedabad","Aizawl","Akola","Allahabad","Along","Amritsar","Aurangabad","Bagdogra","Balurghat","Bangalore","Bareli","Belgaum","Bellary","Bhatinda","Bhavnagar","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Car Nicobar","Chandigarh","Chennai","Coimbatore","Cooch Behar","Cuddapah","Daman","Daparizo","Darjeeling","Dehra Dun","Delhi","Deparizo","Dhanbad","Dharamsala","Dibrugarh","Dimapur","Diu","Gaya","Goa","Gorakhpur","Guna","Guwahati","Gwalior","Hissar","Hubli","Hyderabad","Imphal","Indore","Jabalpur","Jagdalpur","Jaipur","Jaisalmer","Jammu","Jamnagar","Jamshedpur","Jeypore","Jodhpur","Jorhat","Kailashahar","Kamalpur","Kandla","Kanpur","Keshod","Khajuraho","Khowai","Kochi","Kolhapur","Kolkata","Kota","Kozhikode","Kulu","Leh","Lilabari","Lucknow","Ludhiana","Madurai","Malda","Mangalore","Mohanbari","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nasik","Neyveli","Osmanabad","Pantnagar","Pasighat","Pathankot","Patna","Pondicherry","Porbandar","Port Blair","Pune","Puttaparthi","Raipur","Rajahmundry","Rajkot","Rajouri","Ramagundam","Ranchi","Ratnagiri","Rewa","Rourkela","Rupsi","Salem","Satna","Shillong","Sholapur","Silchar","Simla","Srinagar","Surat","Tezpur","Tezu","Thanjavur","Thiruvananthapuram","Tiruchirapally","Tirupati","Tuticorin","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal","Zero"];
  }

  getFlights(){
    if(this.flightSearch.source != this.flightSearch.destination){
      if(this.trip == true){
        this.service.fetchReturnTripFlights(this.flightSearch).subscribe((data: any)=>{
          this.results = data;
        })
      }
      else{
        this.service.fetchOneWayFlights(this.flightSearch).subscribe((data: any) => {
          this.results = data;
        })
      }
    }
    else{
      alert("Please select proper Source/Destination !!!")
    }
  }

  selectFlight(flight){
    this.selectedFlights.push(flight)
    sessionStorage.setItem('flight',JSON.stringify(this.selectedFlights))
    sessionStorage.setItem('noOfPassengers', JSON.stringify(this.flightSearch.noOfPassengers))
  }

  book() {
    let userId = sessionStorage.getItem('id') 
    if(userId == null){
      alert("Please login first !")
      this.router.navigate(['user-login'])
    }
    else{
      console.log(this.selectedFlights)
      this.router.navigate(['/user/reservation'])
    }
  }

}
