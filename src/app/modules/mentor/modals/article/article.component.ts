import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  closeResult = '';

  openLg(content) {
    this.modalService.open(content, { size: 'md' });
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
