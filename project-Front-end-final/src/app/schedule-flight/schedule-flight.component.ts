import { Component, OnInit } from '@angular/core';
import { Schedule } from '../appmodel/schedule';
import { AdminServiceService } from '../appservice/admin-service.service';

@Component({
  selector: 'schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {

  schedule: Schedule = new Schedule();

  message: string;

  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
  }

  addSchedule() {
    this.service.addScheduleForFlight(this.schedule).subscribe(response => {
      this.message = response['message'];
    })
  }

}
