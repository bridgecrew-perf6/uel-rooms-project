import { Component, OnInit, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseContentService } from 'src/app/modules/user/modules/course-view/services/course-content.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  questionResponse;
  answerResponse: FormGroup;
  responses = [];
  count: number = 0;
  showResult = false;
  correctCount = 0;
  totalNumbers = [];
  seconds: number = 0;
  minuites: number = 0;
  inputSeconds: number = 60;
  inputMinuites: number = 0;
  questionCame: Boolean = false;
  constructor(private courseDetails: CourseContentService,
    public dialogRef: MatDialogRef<TestModalComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.answerResponse = new FormGroup({
      questionResponse: new FormControl(),
      selectedanswer: new FormControl('', [Validators.required]),
    });
    this.getQuestion(0);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  getQuestion(count: number) {
    this.questionCame = false;
    this.count = count;
    if (this.questionResponse) {
      if (this.responses.length === this.questionResponse.totalcount) {
        this.showResult = true
      }
    }
    this.courseDetails.getMCQ(this.data.courseId, this.data.chapterslno, this.data.testslno, count,
      this.questionResponse ? [{
        question: this.questionResponse.Question,
        ans_id: this.answerResponse.controls['selectedanswer'].value.id,
        ans_submit: this.answerResponse.controls['selectedanswer'].value.ans,
        time: (this.minuites * 60) + this.seconds
      }] : '').subscribe(res => {
        console.log(res);
      this.questionResponse = res;
      this.answerResponse.patchValue({
        questionResponse: res,
        selectedanswer: ''
      });
      if (this.totalNumbers.length === 0) {
        this.totalNumbers = Array(this.questionResponse.totalcount).fill(0).map((x,i)=>i);
      }
      this.questionCame = true;
    });
  }

}
