import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentJupyterComponent } from './components/assignment-jupyter/assignment-jupyter.component';
import { PSGGraphComponent } from './components/psg-graph/psg-graph.component';


const routes: Routes = [{
  path: '',
  component: AssignmentJupyterComponent
}, 
{
  path: 'psggraph',
  component: PSGGraphComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
