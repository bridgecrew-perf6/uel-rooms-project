import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorForumComponent } from './mentor-forum.component';

describe('MentorForumComponent', () => {
  let component: MentorForumComponent;
  let fixture: ComponentFixture<MentorForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
