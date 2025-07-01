import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  loggedInUser: string;

  constructor() { }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('name')
  }

}
