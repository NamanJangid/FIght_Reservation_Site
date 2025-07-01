import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../appmodel/user';
import { UserServiceService } from '../appservice/user-service.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  user: User = new User();

  constructor(private router: Router,private userService: UserServiceService) { }

  addUser(){

    this.userService.register(this.user).subscribe(data=>{
      if(data.status==true){
        console.log(data.message)
        let id = data.registeredUserId;
        sessionStorage.setItem('id',String(id));
        alert(data.message);
        this.router.navigate(['']);
      }
      else{
        alert(data.message);
      }
    })
  }

}
