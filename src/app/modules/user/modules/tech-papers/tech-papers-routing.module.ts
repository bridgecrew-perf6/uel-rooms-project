import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechPapersFilterComponent } from './routable-components/tech-papers-filter/tech-papers-filter.component';
import { TechPapersIndividualComponent } from './routable-components/tech-papers-individual/tech-papers-individual.component';


const routes: Routes = [
  { 
   path: '',
   component: TechPapersFilterComponent
  },
  {
    path: ':papername',
    component: TechPapersIndividualComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechPapersRoutingModule { }
