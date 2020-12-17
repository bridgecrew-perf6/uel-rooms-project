import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSGGraphComponent } from './psg-graph.component';

describe('PSGGraphComponent', () => {
  let component: PSGGraphComponent;
  let fixture: ComponentFixture<PSGGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSGGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSGGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
