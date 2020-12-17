import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgaComponent } from './psga.component';

describe('PsgaComponent', () => {
  let component: PsgaComponent;
  let fixture: ComponentFixture<PsgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
