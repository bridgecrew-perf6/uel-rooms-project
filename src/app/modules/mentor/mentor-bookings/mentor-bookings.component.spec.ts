import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorBookingsComponent } from './mentor-bookings.component';

describe('MentorBookingsComponent', () => {
  let component: MentorBookingsComponent;
  let fixture: ComponentFixture<MentorBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
