import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NogroupsComponent } from './nogroups.component';

describe('NogroupsComponent', () => {
  let component: NogroupsComponent;
  let fixture: ComponentFixture<NogroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NogroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NogroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
