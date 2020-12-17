import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-mentor-messages',
  templateUrl: './mentor-messages.component.html',
  styleUrls: ['./mentor-messages.component.scss']
})
export class MentorMessagesComponent implements OnInit {

  selectedTabId = 'students';
  isReply: Boolean = false;
  upVote: Boolean = false;
  showmemberDetails: Boolean = false;
  showMentorMemberDetails: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: TabDirective): void {
    this.selectedTabId = data.id;
  }

  reply() {
    this.isReply = true;
  }

}
