import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestUniversalRoutingModule } from './test-universal-routing.module';
import { LazyloadTestComponent } from './lazyload-test/lazyload-test.component';


@NgModule({
  declarations: [LazyloadTestComponent],
  imports: [
    CommonModule,
    TestUniversalRoutingModule
  ]
})
export class TestUniversalModule { }
