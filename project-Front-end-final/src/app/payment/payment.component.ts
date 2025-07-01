import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../appmodel/card';
import { UserAccountBalance } from '../appmodel/UserAccountBalance';
import { UserServiceService } from '../appservice/user-service.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardDetails :Card=new Card();
  payment :Payment =new Payment();
  userAccountBalance: UserAccountBalance = new UserAccountBalance();
  array:[];
  id:number;
  fare:number;
  constructor(private router:Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.array=JSON.parse(sessionStorage.getItem('flight'));
    this.id=JSON.parse(sessionStorage.getItem('id'));
    this.fare=JSON.parse(sessionStorage.getItem('totalFare'));
  }
  onsubmit(){
    this.router.navigate(['/user/invoice']); 
    this.userService.cardDetails(this.payment).subscribe(data1=>{
      
      if(data1){
        this.userAccountBalance.userId=Number(this.id);
        this.userAccountBalance.balance=this.fare;
        this.userService.payment(this.userAccountBalance).subscribe(data=>{
        });
      }
      else{
        alert("no such card");
      }
    })
   

  }
  
}
export class Payment{
  cardType:string;
  cardHolder:string;
  cardNumber:number;
  expiryDate:Date;
  cvc:number;
  totalFare:number;
}

