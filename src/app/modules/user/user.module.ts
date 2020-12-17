import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { PrivateHeaderComponent } from './reusable-components/private-header/private-header.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserDashboardComponent } from './routable-components/user-dashboard/user-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CourseOverviewComponent } from './routable-components/course-overview/course-overview.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PlayVideoComponent } from './routable-components/play-video/play-video.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { McqComponent } from './routable-components/mcq/mcq.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PrivateHeaderComponent, UserLayoutComponent, UserDashboardComponent, CourseOverviewComponent, PlayVideoComponent, McqComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    TabsModule.forRoot(),
    MatExpansionModule,
    ProgressbarModule.forRoot(),
    MatDialogModule,
    CarouselModule,
    MatChipsModule,
    MatMenuModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatButtonModule
  ]
})
export class UserModule { }
