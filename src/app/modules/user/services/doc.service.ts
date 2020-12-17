import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }

  getZpfGraph(courseId) {
    return this.http.get<Config>(`${environment.api}doczpf/${courseId}/`);
  }

  fetchGroupDetails(courseId: number) {
    return this.http.get<Config>(`${environment.api}talkjs_chat/${courseId}`);
  }

  fetchQuizPerformance(courseId: any, user_id: any) {
    return this.http.post(`${environment.api}docktestpart/`,{
      'courseId':courseId,
      'userId':user_id
    });
  }

  getGroupGraphData(courseId, groupId) {
    return this.http.get<Config>(`${environment.api}each_group_user_details/${groupId}/${courseId}`);
  }

  compileCode(code, input) {
    return this.http.post<Config>(`${environment.api}dock_compiler/`, {code: code, sinput : input });
  }

}
