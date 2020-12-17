import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseContentService } from 'src/app/modules/user/modules/course-view/services/course-content.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  assignmentRes;
  activeAssignment = 1;
  constructor(public dialogRef: MatDialogRef<AssignmentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public router: Router,
              private courseDetails: CourseContentService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.getAssignmentInformation(this.data.problem[0].p1, 1);
  }

  openAssignment() {
    this.dialogRef.close();
    const slno = this.data.sl_no.toString().substr(0, 1);
    console.log(slno);
    // window.open(`${environment.jupyterhub}user-redirect/notebooks/Assignments/chapter-${slno}/${this.assignmentRes.tag}.ipynb`)
    this.router.navigate(['user/assignment'], {
      queryParams: {
        tag: this.assignmentRes.tag,
        chapter_slno: slno,
        regcourseid: this.data.regcourseid,
        assignmentId: this.assignmentRes.id,
        timegiven: this.assignmentRes.timegiven,
        prevUrl: this.router.url.replace(/(\&assignment=.*?\d{3})/gi, '') + `&assignment=${this.data.sl_no}`
      }
    });
  }

  getAssignmentInformation(pid, question) {
    this.courseDetails.getAssignmentTopics(this.courseDetails.courseId, this.data.sl_no, pid ? pid : 0, question).subscribe(res => {
      this.assignmentRes = res.Assignment_data;
    });
  }

}
