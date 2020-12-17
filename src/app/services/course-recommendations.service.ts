import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseRecommendationsService {

  constructor(private http: HttpClient) { }

  getCourseRecommendationsData() {
    return this.http.get<Config>(`${environment.api}get_courses`);
  }
}
