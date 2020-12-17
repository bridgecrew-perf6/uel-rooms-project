import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllForamCommentsComponent } from './view-all-foram-comments.component';

describe('ViewAllForamCommentsComponent', () => {
  let component: ViewAllForamCommentsComponent;
  let fixture: ComponentFixture<ViewAllForamCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllForamCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllForamCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
