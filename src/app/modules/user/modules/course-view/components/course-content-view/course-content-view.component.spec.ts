import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentViewComponent } from './course-content-view.component';

describe('CourseContentViewComponent', () => {
  let component: CourseContentViewComponent;
  let fixture: ComponentFixture<CourseContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
