import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.scss']
})
export class EditBioComponent implements OnInit {

  closeResult = '';

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
