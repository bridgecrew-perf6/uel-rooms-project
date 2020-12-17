import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { GroupDashboardRoutingModule } from './group-dashboard-routing.module';
import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GaugeChartModule } from 'angular-gauge-chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  declarations: [GroupDashboardComponent],
  imports: [
    CommonModule,
    GroupDashboardRoutingModule,
    TabsModule,
    ProgressbarModule,
    HighchartsChartModule,
    GaugeChartModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class GroupDashboardModule { }
