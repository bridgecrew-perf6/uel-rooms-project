import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-unavailability',
  templateUrl: './unavailability.component.html',
  styleUrls: ['./unavailability.component.scss']
})
export class UnavailabilityComponent implements OnInit {
  openLg(content) {
    this.modalService.open(content, { size: 'md' });
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
