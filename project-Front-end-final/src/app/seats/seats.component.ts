import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookedSeat, Seat, SelectedSeat } from '../appmodel/seat';
import { SeatService } from '../appservice/seat.service';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  data=[];

  flight: any;
  flights : [];

  fare = 5000;

  selectedSeats: string[];

  allSeats: Seat[][] = [
    [new Seat('A1',true),new Seat('A2',true),new Seat('A3',true),new Seat('A4',true),new Seat('A5',true),new Seat('A6',true),new Seat('A7',true),new Seat('A8',true),new Seat('A9',true),new Seat('A10',true),new Seat('A11',true),new Seat('A12',true),new Seat('A13',true),new Seat('A14',true),new Seat('A15',true),new Seat('A16',true),new Seat('A17',true),new Seat('A18',true),new Seat('A19',true),new Seat('A20',true)],
    [new Seat('B1',true),new Seat('B2',true),new Seat('B3',true),new Seat('B4',true),new Seat('B5',true),new Seat('B6',true),new Seat('B7',true),new Seat('B8',true),new Seat('B9',true),new Seat('B10',true),new Seat('B11',true),new Seat('B12',true),new Seat('B13',true),new Seat('B14',true),new Seat('B15',true),new Seat('B16',true),new Seat('B17',true),new Seat('B18',true),new Seat('B19',true),new Seat('B20',true)],
    [new Seat('C1',true),new Seat('C2',true),new Seat('C3',true),new Seat('C4',true),new Seat('C5',true),new Seat('C6',true),new Seat('C7',true),new Seat('C8',true),new Seat('C9',true),new Seat('C10',true),new Seat('C11',true),new Seat('C12',true),new Seat('C13',true),new Seat('C14',true),new Seat('C15',true),new Seat('C16',true),new Seat('C17',true),new Seat('C18',true),new Seat('C19',true),new Seat('C20',true)],
    [new Seat('D1',true),new Seat('D2',true),new Seat('D3',true),new Seat('D4',true),new Seat('D5',true),new Seat('D6',true),new Seat('D7',true),new Seat('D8',true),new Seat('D9',true),new Seat('D10',true),new Seat('D11',true),new Seat('D12',true),new Seat('D13',true),new Seat('D14',true),new Seat('D15',true),new Seat('D16',true),new Seat('D17',true),new Seat('D18',true),new Seat('D19',true),new Seat('D20',true)],
    [new Seat('E1',true),new Seat('E2',true),new Seat('E3',true),new Seat('E4',true),new Seat('E5',true),new Seat('E6',true),new Seat('E7',true),new Seat('E8',true),new Seat('E9',true),new Seat('E10',true),new Seat('E11',true),new Seat('E12',true),new Seat('E13',true),new Seat('E14',true),new Seat('E15',true),new Seat('E16',true),new Seat('E17',true),new Seat('E18',true),new Seat('E19',true),new Seat('E20',true)]
  ]
  
  bookedSeats : BookedSeat;

  constructor(private router :Router,private service : SeatService) { }

  ngOnInit(): void {
    this.selectedSeats = new Array<string>();

    this.flight = sessionStorage.getItem('flight');
    this.flights =JSON.parse(sessionStorage.getItem('flight'));
    
    this.service.getBookedSeats(this.bookedSeats).subscribe((data:any)=>{
      this.data = data;
      for(let row of this.allSeats){
        for(let seat of row){
          if(this.data.includes(seat.seatNo)){
            seat.status = false;
          }
        }
      }
    })
  }
  
  getSeatNo(event: any, seatNo: string){
    if(event.target.checked){
      
      this.selectedSeats.push(seatNo);
    }
    else{
      this.selectedSeats = this.selectedSeats.filter(m=>m!=seatNo);
    }
    console.log(this.selectedSeats)
  }

 

  goToPayment(){
    sessionStorage.setItem('selectedSeats',JSON.stringify(this.selectedSeats));
    sessionStorage.setItem('totalFare', JSON.stringify(this.selectedSeats.length*this.fare))
    this.router.navigate(['/user/payment']); 
  }
}
