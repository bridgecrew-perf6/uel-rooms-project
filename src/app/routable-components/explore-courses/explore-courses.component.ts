import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements OnInit {

  courses;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.http.get<Config>(`${environment.api}/get_courses/`).subscribe(res => {
       if (res && res.status === 'Sucess') {
         this.courses = res.data;
       }
    });
  }

}
