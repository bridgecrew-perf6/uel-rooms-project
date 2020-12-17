import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { MatDialog } from '@angular/material/dialog';
import { ViewAllForamCommentsComponent } from '../reusable-components/modals/view-all-foram-comments/view-all-foram-comments.component';

@Component({
  selector: 'app-mentor-forum',
  templateUrl: './mentor-forum.component.html',
  styleUrls: ['./mentor-forum.component.scss']
})
export class MentorForumComponent implements OnInit {

  selectedTabId = 'students';
  isReply: Boolean = false;
  upVote: Boolean = false;
  showmemberDetails: Boolean = false;
  showMentorMemberDetails: Boolean = false;
  showLess: Boolean = true;
  value = 'Clear me';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSelect(data: TabDirective): void {
    this.selectedTabId = data.id;
  }

  reply() {
    this.isReply = true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewAllForamCommentsComponent, {
      width: '650px',
      disableClose: true
    });

}
}
