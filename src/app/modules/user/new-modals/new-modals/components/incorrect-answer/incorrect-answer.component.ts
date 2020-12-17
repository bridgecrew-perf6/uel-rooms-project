import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-incorrect-answer',
  templateUrl: './incorrect-answer.component.html',
  styleUrls: ['./incorrect-answer.component.scss']
})
export class IncorrectAnswerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IncorrectAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
