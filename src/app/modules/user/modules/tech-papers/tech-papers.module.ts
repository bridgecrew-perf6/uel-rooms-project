import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechPapersRoutingModule } from './tech-papers-routing.module';
import { TechPapersFilterComponent } from './routable-components/tech-papers-filter/tech-papers-filter.component';
import { TechPapersIndividualComponent } from './routable-components/tech-papers-individual/tech-papers-individual.component';


@NgModule({
  declarations: [TechPapersFilterComponent, TechPapersIndividualComponent],
  imports: [
    CommonModule,
    TechPapersRoutingModule
  ]
})
export class TechPapersModule { }
