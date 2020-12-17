import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-all-foram-comments',
  templateUrl: './view-all-foram-comments.component.html',
  styleUrls: ['./view-all-foram-comments.component.scss']
})
export class ViewAllForamCommentsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewAllForamCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
