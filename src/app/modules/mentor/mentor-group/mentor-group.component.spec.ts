import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorGroupComponent } from './mentor-group.component';

describe('MentorGroupComponent', () => {
  let component: MentorGroupComponent;
  let fixture: ComponentFixture<MentorGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
