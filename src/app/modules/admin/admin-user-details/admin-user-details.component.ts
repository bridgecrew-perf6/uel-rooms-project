import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.scss']
})
export class AdminUserDetailsComponent implements OnInit {

  max: number = 5;
  rate: number = 5;
  isReadonly: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
