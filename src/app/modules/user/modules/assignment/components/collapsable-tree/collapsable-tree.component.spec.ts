import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableTreeComponent } from './collapsable-tree.component';

describe('CollapsableTreeComponent', () => {
  let component: CollapsableTreeComponent;
  let fixture: ComponentFixture<CollapsableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
