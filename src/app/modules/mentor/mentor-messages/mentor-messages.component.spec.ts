import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorMessagesComponent } from './mentor-messages.component';

describe('MentorMessagesComponent', () => {
  let component: MentorMessagesComponent;
  let fixture: ComponentFixture<MentorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
