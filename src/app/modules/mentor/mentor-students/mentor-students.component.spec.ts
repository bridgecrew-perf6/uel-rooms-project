import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentsComponent } from './mentor-students.component';

describe('MentorStudentsComponent', () => {
  let component: MentorStudentsComponent;
  let fixture: ComponentFixture<MentorStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
