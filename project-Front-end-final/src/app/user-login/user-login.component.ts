import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from '../appmodel/user-login-dto';
import { UserServiceService } from '../appservice/user-service.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userLoginDto: UserLoginDto = new UserLoginDto();
  constructor(private router: Router, private userService: UserServiceService) { }

 loginCheck(){
  this.userService.login(this.userLoginDto).subscribe(data=>{
    if(data.status==true){
      console.log(data.message);
      let id = data.id
      let name = data.name;
      sessionStorage.setItem('id',String(id));
      sessionStorage.setItem('name',name);
      this.router.navigate(['user']);
    }
    else{
      alert(data.message);
    }
  });
 }

}
