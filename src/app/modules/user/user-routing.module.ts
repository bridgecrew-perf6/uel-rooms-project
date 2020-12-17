import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserDashboardComponent } from './routable-components/user-dashboard/user-dashboard.component';
import { CourseOverviewComponent } from './routable-components/course-overview/course-overview.component';
import { PlayVideoComponent } from './routable-components/play-video/play-video.component';
import { McqComponent } from './routable-components/mcq/mcq.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      { path: 'course/:coursename', component: CourseOverviewComponent },
      { path: 'course/:coursename/:video', component: PlayVideoComponent },
      { path: 'course/mcq/:coursename/:video', component: McqComponent },
      { 
        path: 'course-concepts',
        loadChildren:() => import('../user/modules/course-view/course-view.module').then(m => m.CourseViewModule)
      },
      {
        path: 'tech-papers',
        loadChildren:() => import(`../user/modules/tech-papers/tech-papers.module`).then(m => m.TechPapersModule)
      },
      {
        path: 'assignment',
        loadChildren:() => import(`../user/modules/assignment/assignment.module`).then(m => m.AssignmentModule)
      },
      {
        path: 'group-dashboard',
        loadChildren:() => import(`../user/modules/group-dashboard/group-dashboard.module`).then(m => m.GroupDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
