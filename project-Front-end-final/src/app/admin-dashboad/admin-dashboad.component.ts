import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboad',
  templateUrl: './admin-dashboad.component.html',
  styleUrls: ['./admin-dashboad.component.css']
})
export class AdminDashboadComponent implements OnInit {

  username: string;
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('username')=='admin'){
      this.username = sessionStorage.getItem('username');
    }
    else{
      this.username = sessionStorage.getItem('name');
    }
    
  }

}
