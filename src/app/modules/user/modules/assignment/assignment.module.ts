import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentJupyterComponent } from './components/assignment-jupyter/assignment-jupyter.component';
import { PSGGraphComponent } from './components/psg-graph/psg-graph.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { VerticalCollapsableTreeComponent } from './components/vertical-collapsable-tree/vertical-collapsable-tree.component';
import { CollapsableTreeComponent } from './components/collapsable-tree/collapsable-tree.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { DiagramModule, HierarchicalTreeService, DataBindingService } from '@syncfusion/ej2-angular-diagrams';
import { MatTooltipModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AssignmentJupyterComponent, PSGGraphComponent, VerticalCollapsableTreeComponent, CollapsableTreeComponent, OrgChartComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    TabsModule,
    CoreModule,
    HighchartsChartModule,
    DiagramModule,
    MatTooltipModule,
    ModalModule.forRoot()
  ],
  providers: [
    HierarchicalTreeService, DataBindingService
  ]
})
export class AssignmentModule { }
