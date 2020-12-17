import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  closeResult = '';

  courses = new FormControl();
  courseList: string[] = ['18 April 2020', '19 April 2020', '20 April 2020',]
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
