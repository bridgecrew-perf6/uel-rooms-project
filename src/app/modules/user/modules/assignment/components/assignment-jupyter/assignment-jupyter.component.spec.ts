import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentJupyterComponent } from './assignment-jupyter.component';

describe('AssignmentJupyterComponent', () => {
  let component: AssignmentJupyterComponent;
  let fixture: ComponentFixture<AssignmentJupyterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentJupyterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentJupyterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
