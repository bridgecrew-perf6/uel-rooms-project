import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCollapsableTreeComponent } from './vertical-collapsable-tree.component';

describe('VerticalCollapsableTreeComponent', () => {
  let component: VerticalCollapsableTreeComponent;
  let fixture: ComponentFixture<VerticalCollapsableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCollapsableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCollapsableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
