import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorGroupDashbaordComponent } from './mentor-group-dashbaord.component';

describe('MentorGroupDashbaordComponent', () => {
  let component: MentorGroupDashbaordComponent;
  let fixture: ComponentFixture<MentorGroupDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorGroupDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorGroupDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
