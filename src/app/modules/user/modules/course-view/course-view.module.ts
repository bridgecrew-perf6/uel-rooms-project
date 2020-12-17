import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseViewRoutingModule } from './course-view-routing.module';
import { CourseLayoutComponent } from './layouts/course-layout/course-layout.component';
import { CourseContentViewComponent } from './components/course-content-view/course-content-view.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CourseTaskComponent } from './components/course-task/course-task.component';
import { CourseAssignmentComponent } from './components/course-assignment/course-assignment.component';
import { KnowledgegapComponent } from './modals/knowledgegap/knowledgegap.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { PsgaComponent } from './modals/psga/psga.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HighchartsChartModule } from 'highcharts-angular';
import { NewModalsModule } from '../../new-modals/new-modals/new-modals.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [CourseLayoutComponent, CourseContentViewComponent, CourseTaskComponent, CourseAssignmentComponent, KnowledgegapComponent, PsgaComponent],
  imports: [
    CommonModule,
    CourseViewRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ModalModule.forChild(),
    HighchartsChartModule,
    MatDividerModule,
    NewModalsModule,
    MonacoEditorModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    KnowledgegapComponent,
    PsgaComponent
  ]
})
export class CourseViewModule { }
