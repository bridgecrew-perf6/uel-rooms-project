import { Component, OnInit } from '@angular/core';
import { CourseContentService } from '../../services/course-content.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { PsgaComponent } from '../../modals/psga/psga.component';

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrls: ['./course-assignment.component.scss']
})
export class CourseAssignmentComponent implements OnInit {

  assignmentInfo;
  code;
  testresults = [];

  constructor(private courseDetails: CourseContentService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(paramas => {
      if (paramas.hasOwnProperty('assignment_id')) {
        this.getAssignmentDetails(paramas);
      }
    });
  }

  getAssignmentDetails(res) {
    this.courseDetails.getAssignmentInfo(res.courseid, res.assignment_id, res.assignmentIndex, res.chapterindex).subscribe(res => {
      this.assignmentInfo = res;
      this.code = res.record;
      // if (res.kg_topics.length > 0) {
      //   this.dialog.open(KnowledgegapComponent, {
      //     data: res.kg_topics
      //   });
      // }
    });
  }

  runCode() {
    this.courseDetails.runTestCases(this.code, this.route.snapshot.queryParams.assignment_id, 200, this.route.snapshot.queryParams.regcourseid, this.route.snapshot.queryParams.chapterindex, this.route.snapshot.queryParams.assignmentIndex).subscribe(res => {
     console.log(res);
     this.testresults = res.testcases;
    });
  }

  save() {
    this.courseDetails.saveAssignment(this.route.snapshot.queryParams.assignment_id, this.code).subscribe(res => {
     console.log(res);
     alert("Code saved")
    });
  }

  psda() {
    this.dialog.open(PsgaComponent, {
      data: this.assignmentInfo
    });
    // this.courseDetails.psda(this.assignmentInfo.data.tag).subscribe(res => {
    //  console.log(res);
    // });
  }

}
