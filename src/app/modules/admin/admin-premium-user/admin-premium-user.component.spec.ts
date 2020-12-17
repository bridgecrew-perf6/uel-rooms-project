import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPremiumUserComponent } from './admin-premium-user.component';

describe('AdminPremiumUserComponent', () => {
  let component: AdminPremiumUserComponent;
  let fixture: ComponentFixture<AdminPremiumUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPremiumUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPremiumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
