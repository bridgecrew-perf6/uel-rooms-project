import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-bookings',
  templateUrl: './mentor-bookings.component.html',
  styleUrls: ['./mentor-bookings.component.scss']
})
export class MentorBookingsComponent implements OnInit {
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
