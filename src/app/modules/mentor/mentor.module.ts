import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MentorRoutingModule } from './mentor-routing.module';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../core/core.module';
import { MentorHeaderComponent } from './reusable-components/mentor-header/mentor-header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { MatMenuModule } from '@angular/material/menu';
import { MentorMessagesComponent } from './mentor-messages/mentor-messages.component';
import { MentorForumComponent } from './mentor-forum/mentor-forum.component';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MentorGroupComponent } from './mentor-group/mentor-group.component';
import { MatTableModule } from '@angular/material/table';
import { ViewAllForamCommentsComponent } from './reusable-components/modals/view-all-foram-comments/view-all-foram-comments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MentorProfileComponent } from './reusable-components/mentor-header/mentor-profile/mentor-profile.component';
import { MentorGroupDashboardComponent } from './mentor-group-dashboard/mentor-group-dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NogroupsComponent } from './groups/nogroups/nogroups.component';
import { SessionsComponent } from './sessions/sessions.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditComponent } from './modals/edit/edit.component';
import { ArticleComponent } from './modals/article/article.component';
import { VirtualComponent } from './modals/virtual/virtual.component';
import { RescheduleComponent } from './modals/reschedule/reschedule.component';
import { MentorStudentDetailsComponent } from './mentor-student-details/mentor-student-details.component';
import { EditBioComponent } from './modals/edit-bio/edit-bio.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MentorStudentsComponent } from './mentor-students/mentor-students.component';
import { MentorBookingsComponent } from './mentor-bookings/mentor-bookings.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UnavailabilityComponent } from './modals/unavailability/unavailability.component';



@NgModule({
  declarations: [MentorDashboardComponent, MentorGroupComponent, ViewAllForamCommentsComponent, MentorForumComponent, LayoutComponent, MentorHeaderComponent, MentorMessagesComponent, MentorProfileComponent, MentorGroupDashboardComponent, GroupsComponent, NogroupsComponent, SessionsComponent, DeleteComponent, EditComponent, ArticleComponent, VirtualComponent, RescheduleComponent, MentorStudentDetailsComponent, EditBioComponent, MentorStudentsComponent, MentorBookingsComponent, UnavailabilityComponent ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    CoreModule
  ]
})
export class MentorModule { }
