import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';


const routes: Routes = [{
  path: '',
  component: GroupDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupDashboardRoutingModule { }
