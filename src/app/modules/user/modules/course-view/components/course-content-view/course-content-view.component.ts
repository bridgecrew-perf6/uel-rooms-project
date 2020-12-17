import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CourseContentService } from '../../services/course-content.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { TestModalComponent } from 'src/app/modules/user/new-modals/new-modals/components/test-modal/test-modal.component';

@Component({
  selector: 'app-course-content-view',
  templateUrl: './course-content-view.component.html',
  styleUrls: ['./course-content-view.component.scss']
})
export class CourseContentViewComponent implements OnInit {

  ngOnInit(): void {
   
  }


}
