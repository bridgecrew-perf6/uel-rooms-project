import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayConfirmationComponent } from './play-confirmation.component';

describe('PlayConfirmationComponent', () => {
  let component: PlayConfirmationComponent;
  let fixture: ComponentFixture<PlayConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
