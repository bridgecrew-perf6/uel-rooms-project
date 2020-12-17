import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {

  constructor(private http: HttpClient) { }

  getGraphData(courseId, userid, chapter_slno) {
    return this.http.get<Config>(`${environment.api}Dashboard_graphs_data/${courseId}/?${userid ? 'userid=' + userid : ''}&${chapter_slno ? 'chapter_slno=' + chapter_slno : ''}`, {
      // params: new HttpParams().set('userid', userid).set('chapter_slno', chapter_slno)
    });
  }

  getFilterData(courseId) {
    return this.http.get<Config>(`${environment.api}Dashboard_filters_data/${courseId}`);
  }

  
  getLastActivityofCourse(courseId) {
    return this.http.get<Config>(`${environment.api}/lastactivity_url/${courseId}/`);
  }

  getMcqScores(regCourseId, chapter_slno) {
    return this.http.get<Config>(`${environment.api}dashboardMCQgraph/${regCourseId}/${chapter_slno}/`);
  }

  getGroupMcqScores(regCourseId, chaptersl_no) {
    return this.http.get<Config>(`${environment.api}groupdashboardMCQgraph/${regCourseId}/${chaptersl_no}/`);
  }

  getCourseProgress(regCourseId) {
    return this.http.get<Config>(`${environment.api}CourseProgressDashboard/${regCourseId}/`);
  }

  getGroupCourseProgress(regCourseId) {
    return this.http.get<Config>(`${environment.api}groupCourseProgressDashboard/${regCourseId}/`);
  }

  getAssignmentProgress(regCourseId, chapter_slno) {
    return this.http.get<Config>(`${environment.api}dashboardAssignmentGraph/${regCourseId}/${chapter_slno}/`);
  }

  getGroupAssignmentProgress(regCourseId, chapter_slno) {
    return this.http.get<Config>(`${environment.api}groupDashBoardAssignmentGraph/${regCourseId}/${chapter_slno}/`);
  }

  getZpf(regCourseId) {
    return this.http.get<Config>(`${environment.api}zpfDashBoard/${regCourseId}/`);
  }
}
