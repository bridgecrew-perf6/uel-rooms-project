import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MentorMessagesComponent } from './mentor-messages/mentor-messages.component';
import { MentorForumComponent } from './mentor-forum/mentor-forum.component';
import { MentorGroupComponent } from './mentor-group/mentor-group.component';
import { MentorProfileComponent } from './reusable-components/mentor-header/mentor-profile/mentor-profile.component';
import { MentorGroupDashboardComponent } from './mentor-group-dashboard/mentor-group-dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { NogroupsComponent } from './groups/nogroups/nogroups.component';
import { SessionsComponent } from './sessions/sessions.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditComponent } from './modals/edit/edit.component';
import { ArticleComponent } from './modals/article/article.component';
import { VirtualComponent } from './modals/virtual/virtual.component';
import { RescheduleComponent } from './modals/reschedule/reschedule.component';
import { MentorStudentDetailsComponent } from './mentor-student-details/mentor-student-details.component';
import { MentorStudentsComponent } from './mentor-students/mentor-students.component';
import { MentorBookingsComponent } from './mentor-bookings/mentor-bookings.component';
import { UnavailabilityComponent } from './modals/unavailability/unavailability.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MentorDashboardComponent
      },
      {
        path: 'messages',
        component: MentorMessagesComponent
      },
      {
        path: 'forum',
        component: MentorForumComponent
      },
      {
        path: 'studentinfo',
        component: MentorStudentDetailsComponent
      },
      {
        path: 'students',
        component: MentorStudentsComponent
      },
      {
        path: 'group',
        component: MentorGroupComponent
      },
      {
        path: 'profile',
        component: MentorProfileComponent
      },
      {
        path: 'groupdashboard',
        component: MentorGroupDashboardComponent
      },
      {
      path: 'group',
      component: GroupsComponent,
      children: [{
        path: '',
        component: NogroupsComponent,
        outlet: 'nogroups'
      }]
    },
    {
      path: 'sessions',
      component: SessionsComponent,
    },
    {
      path: '',
      component: DeleteComponent,
      outlet: 'delete'
    },
    {
      path: '',
      component: VirtualComponent,
      
    },
    {
      path: '',
      component: ArticleComponent,
      
    },
    {
      path: '',
      component: EditComponent,
      
    },
    {
      path: '',
      component: RescheduleComponent,
      
    },
    {
      path: '',
      component: UnavailabilityComponent,
      
    },
    {
      path: 'bookings',
      component: MentorBookingsComponent,
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
