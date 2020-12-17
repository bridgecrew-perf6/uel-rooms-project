import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentDetailsComponent } from './mentor-student-details.component';

describe('MentorStudentDetailsComponent', () => {
  let component: MentorStudentDetailsComponent;
  let fixture: ComponentFixture<MentorStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
