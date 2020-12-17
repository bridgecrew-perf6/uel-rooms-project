import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBasicUserComponent } from './admin-basic-user.component';

describe('AdminBasicUserComponent', () => {
  let component: AdminBasicUserComponent;
  let fixture: ComponentFixture<AdminBasicUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBasicUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBasicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
