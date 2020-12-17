import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  courses = new FormControl();
  courseList: string[] = ['Cloud Computing', 'Machine Learning', 'Machine Learning Bootcamp',];
  constructor() { }

  ngOnInit(): void {
  }

}
