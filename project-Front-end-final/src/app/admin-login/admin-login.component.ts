import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../appmodel/admin';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin = new Admin();

  constructor(private router: Router, private adminService: AdminServiceService) { }

  ngOnInit(): void {
  }

  loginCheck(){
    this.adminService.login(this.admin).subscribe(data=>{
      if(data.status==true){
        console.log(data.message);
        let id = data.id;
        let username = data.name;
        sessionStorage.setItem('id',String(id));
        sessionStorage.setItem('username',username);
        this.router.navigate(['admin-dashboad']);
      }
      else{
        alert(data.message);
      }
    });
  }
}
