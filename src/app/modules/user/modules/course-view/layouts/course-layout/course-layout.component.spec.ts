import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLayoutComponent } from './course-layout.component';

describe('CourseLayoutComponent', () => {
  let component: CourseLayoutComponent;
  let fixture: ComponentFixture<CourseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
