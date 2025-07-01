import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../appmodel/flight';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent  {

  flight:Flight = new Flight();

  source:string[];
  destination: string[];

  constructor(private router: Router, private adminService: AdminServiceService) { 
    this.source=[
      "Agartala","Agatti Island","Agra","Ahmedabad","Aizawl","Akola","Allahabad","Along","Amritsar","Aurangabad","Bagdogra","Balurghat","Bangalore","Bareli","Belgaum","Bellary","Bhatinda","Bhavnagar","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Car Nicobar","Chandigarh","Chennai","Coimbatore","Cooch Behar","Cuddapah","Daman","Daparizo","Darjeeling","Dehra Dun","Delhi","Deparizo","Dhanbad","Dharamsala","Dibrugarh","Dimapur","Diu","Gaya","Goa","Gorakhpur","Guna","Guwahati","Gwalior","Hissar","Hubli","Hyderabad","Imphal","Indore","Jabalpur","Jagdalpur","Jaipur","Jaisalmer","Jammu","Jamnagar","Jamshedpur","Jeypore","Jodhpur","Jorhat","Kailashahar","Kamalpur","Kandla","Kanpur","Keshod","Khajuraho","Khowai","Kochi","Kolhapur","Kolkata","Kota","Kozhikode","Kulu","Leh","Lilabari","Lucknow","Ludhiana","Madurai","Malda","Mangalore","Mohanbari","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nasik","Neyveli","Osmanabad","Pantnagar","Pasighat","Pathankot","Patna","Pondicherry","Porbandar","Port Blair","Pune","Puttaparthi","Raipur","Rajahmundry","Rajkot","Rajouri","Ramagundam","Ranchi","Ratnagiri","Rewa","Rourkela","Rupsi","Salem","Satna","Shillong","Sholapur","Silchar","Simla","Srinagar","Surat","Tezpur","Tezu","Thanjavur","Thiruvananthapuram","Tiruchirapally","Tirupati","Tuticorin","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal","Zero"
    ];
    this.destination=[
      "Agartala","Agatti Island","Agra","Ahmedabad","Aizawl","Akola","Allahabad","Along","Amritsar","Aurangabad","Bagdogra","Balurghat","Bangalore","Bareli","Belgaum","Bellary","Bhatinda","Bhavnagar","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Car Nicobar","Chandigarh","Chennai","Coimbatore","Cooch Behar","Cuddapah","Daman","Daparizo","Darjeeling","Dehra Dun","Delhi","Deparizo","Dhanbad","Dharamsala","Dibrugarh","Dimapur","Diu","Gaya","Goa","Gorakhpur","Guna","Guwahati","Gwalior","Hissar","Hubli","Hyderabad","Imphal","Indore","Jabalpur","Jagdalpur","Jaipur","Jaisalmer","Jammu","Jamnagar","Jamshedpur","Jeypore","Jodhpur","Jorhat","Kailashahar","Kamalpur","Kandla","Kanpur","Keshod","Khajuraho","Khowai","Kochi","Kolhapur","Kolkata","Kota","Kozhikode","Kulu","Leh","Lilabari","Lucknow","Ludhiana","Madurai","Malda","Mangalore","Mohanbari","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nagpur","Nanded","Nasik","Neyveli","Osmanabad","Pantnagar","Pasighat","Pathankot","Patna","Pondicherry","Porbandar","Port Blair","Pune","Puttaparthi","Raipur","Rajahmundry","Rajkot","Rajouri","Ramagundam","Ranchi","Ratnagiri","Rewa","Rourkela","Rupsi","Salem","Satna","Shillong","Sholapur","Silchar","Simla","Srinagar","Surat","Tezpur","Tezu","Thanjavur","Thiruvananthapuram","Tiruchirapally","Tirupati","Tuticorin","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal","Zero"
    ];
  }

  addFlight(){
    if(this.flight.source==this.flight.destination){
      alert("Source and destination cannot be same");
    }else if (this.flight.availableSeats<99) {
      alert("Seats cannot be less than 100")
    }
    else{
      this.adminService.addFlight(this.flight).subscribe(data=>{
        alert(data.flightId);
      });
    }
  }
}

