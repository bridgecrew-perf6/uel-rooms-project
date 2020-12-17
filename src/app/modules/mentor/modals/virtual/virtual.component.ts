import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {
  closeResult = '';

  courses = new FormControl();
  courseList: string[] = ['18 April 2020', '19 April 2020', '20 April 2020',]
  openLg(content) {
    this.modalService.open(content, { size: 'md' });
  }
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
  }
}
