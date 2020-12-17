import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseLayoutComponent } from './layouts/course-layout/course-layout.component';
import { CourseContentViewComponent } from './components/course-content-view/course-content-view.component';
import { CourseTaskComponent } from './components/course-task/course-task.component';
import { CourseAssignmentComponent } from './components/course-assignment/course-assignment.component';


const routes: Routes = [{
  path: ':regcourseid/:courseid',
  component: CourseLayoutComponent,
  children: [
    { path: 'content', component: CourseContentViewComponent },
    { path: 'test', component: CourseTaskComponent },
    { path: 'assignment', component: CourseAssignmentComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseViewRoutingModule { }
