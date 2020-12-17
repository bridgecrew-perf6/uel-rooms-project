import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseContentService {

  courseId;
  registeredCourseId;
  triggerCompiler$ = new BehaviorSubject<Boolean>(false);
  detailsofComponent = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  getIndex(courseId) {
    return this.http.get<Config>(`${environment.api}/course_index/${courseId}`);
  }

  getCourseInfo(courseId) {
    return this.http.get<Config>(`${environment.api}contentsDisplay/course/${courseId}/`);
  }

  getContentOfTopic(chapterId, topicId) {
    return this.http.get<Config>(`${environment.api}/cdndisplay/${chapterId}/${topicId}`);
  }

  getAssignmentInfo(courseId, assignmentid, chapterindex, assignmentindex) {
    return this.http.get<Config>(`${environment.api}Assig/${courseId}/${assignmentid}/${chapterindex}/${assignmentindex}/`);
  }

  getAssignmentTopics(courseId, chapterSlNo, problemId, qnum) {
    return this.http.get<Config>(`${environment.api}Assignment/${courseId}/${chapterSlNo}/${problemId}/${qnum}`)
  }

  runTestCases(code: any, id: any, time: any, reg_course_id: any, chapterIndex: number, assignId: number) {
    return this.http.post<Config>(`${environment.api}alltestcases_verifying/`, { 'code': code, 'id': id, 'time': time, 'reg_course_id': reg_course_id, 'chapterIndex': chapterIndex, 'probIndex': assignId });
  }

  saveAssignment(id: any, code: any) {
    return this.http.post<Config>(`${environment.api}saveProblem/`, { 'id': id, 'code': code });
  }

  psda(tag, reg_courseid) {
    return this.http.get<Config>(`${environment.api}psga/${tag}/${tag}/${reg_courseid}`);
  }

  psdaInitial(array, node_ks, nodes?, re_course_id?) { // ?tag=${JSON.stringify(array)}
    return this.http.post<Config>(`${environment.api}psgaqd/`, {
      tag: array,
      nodes: nodes,
      regcourseid: re_course_id,
      node_ks: node_ks
    });
  }
  

  getZpfGraph(courseId) {
    return this.http.get<Config>(`${environment.api}doczpf/${courseId}/`);
  }

  getMCQ(courseId, chapterSlNo, testSlNo, count, questionsData?) {
    return this.http.post<Config>(`${environment.api}MCQ/${courseId}/${chapterSlNo}/${testSlNo}/${count}`, questionsData);
  }

}
