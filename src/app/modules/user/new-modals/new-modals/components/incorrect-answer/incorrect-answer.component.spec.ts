import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectAnswerComponent } from './incorrect-answer.component';

describe('IncorrectAnswerComponent', () => {
  let component: IncorrectAnswerComponent;
  let fixture: ComponentFixture<IncorrectAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
