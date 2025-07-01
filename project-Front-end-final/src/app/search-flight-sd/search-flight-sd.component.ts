import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../appmodel/flight';
import { SearchFlightSDDto } from '../appmodel/search-flight-sddto';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'search-flight-sd',
  templateUrl: './search-flight-sd.component.html',
  styleUrls: ['./search-flight-sd.component.css']
})
export class SearchFlightSDComponent {

  searchFlightSDDto: SearchFlightSDDto = new SearchFlightSDDto();

  flights: Flight[];
  headers:string[];
  source:string[];
  destination:string[];

  show:boolean= false;

  constructor(private router:Router, private adminService: AdminServiceService) {
    this.headers=[
      "Flight No","Source","Destination","Duration","Status"
    ];
    this.source=[
      "Agartala","Agatti Island","Agra","Ahmedabad","Aizawl","Akola","Allahabad","Along","Amritsar","Aurangabad","Bagdogra","Balurghat","Bangalore","Bareli","Belgaum","Bellary","Bhatinda","Bhavnagar","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Car Nicobar","Chandigarh","Chennai","Coimbatore","Cooch Behar","Cuddapah","Daman","Daparizo","Darjeeling","Dehra Dun","Delhi","Deparizo","Dhanbad","Dharamsala","Dibrugarh","Dimapur","Diu","Gaya","Goa","Gorakhpur","Guna","Guwahati","Gwalior","Hissar","Hubli","Hyderabad","Imphal","Indore","Jabalpur","Jagdalpur","Jaipur","Jaisalmer","Jammu","Jamnagar","Jamshedpur","Jeypore","Jodhpur","Jorhat","Kailashahar","Kamalpur","Kandla","Kanpur","Keshod","Khajuraho","Khowai","Kochi","Kolhapur","Kolkata","Kota","Kozhikode","Kulu","Leh","Lilabari","Lucknow","Ludhiana","Madurai","Malda","Mangalore","Mohanbari","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nasik","Neyveli","Osmanabad","Pantnagar","Pasighat","Pathankot","Patna","Pondicherry","Porbandar","Port Blair","Pune","Puttaparthi","Raipur","Rajahmundry","Rajkot","Rajouri","Ramagundam","Ranchi","Ratnagiri","Rewa","Rourkela","Rupsi","Salem","Satna","Shillong","Sholapur","Silchar","Simla","Srinagar","Surat","Tezpur","Tezu","Thanjavur","Thiruvananthapuram","Tiruchirapally","Tirupati","Tuticorin","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal","Zero"
    ];
    this.destination=[
      "Agartala","Agatti Island","Agra","Ahmedabad","Aizawl","Akola","Allahabad","Along","Amritsar","Aurangabad","Bagdogra","Balurghat","Bangalore","Bareli","Belgaum","Bellary","Bhatinda","Bhavnagar","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Car Nicobar","Chandigarh","Chennai","Coimbatore","Cooch Behar","Cuddapah","Daman","Daparizo","Darjeeling","Dehra Dun","Delhi","Deparizo","Dhanbad","Dharamsala","Dibrugarh","Dimapur","Diu","Gaya","Goa","Gorakhpur","Guna","Guwahati","Gwalior","Hissar","Hubli","Hyderabad","Imphal","Indore","Jabalpur","Jagdalpur","Jaipur","Jaisalmer","Jammu","Jamnagar","Jamshedpur","Jeypore","Jodhpur","Jorhat","Kailashahar","Kamalpur","Kandla","Kanpur","Keshod","Khajuraho","Khowai","Kochi","Kolhapur","Kolkata","Kota","Kozhikode","Kulu","Leh","Lilabari","Lucknow","Ludhiana","Madurai","Malda","Mangalore","Mohanbari","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nasik","Neyveli","Osmanabad","Pantnagar","Pasighat","Pathankot","Patna","Pondicherry","Porbandar","Port Blair","Pune","Puttaparthi","Raipur","Rajahmundry","Rajkot","Rajouri","Ramagundam","Ranchi","Ratnagiri","Rewa","Rourkela","Rupsi","Salem","Satna","Shillong","Sholapur","Silchar","Simla","Srinagar","Surat","Tezpur","Tezu","Thanjavur","Thiruvananthapuram","Tiruchirapally","Tirupati","Tuticorin","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal","Zero"
    ];
   }

  search(){
    this.adminService.searchFlightSD(this.searchFlightSDDto).subscribe(data=>{
      this.flights = data;
      if(data!=null){
        this.show= true;
      }
      else{
        alert("No Such Flights are Available!");
      }
    });
  }

}