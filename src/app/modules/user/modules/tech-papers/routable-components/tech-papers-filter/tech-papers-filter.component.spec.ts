import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPapersFilterComponent } from './tech-papers-filter.component';

describe('TechPapersFilterComponent', () => {
  let component: TechPapersFilterComponent;
  let fixture: ComponentFixture<TechPapersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechPapersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPapersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
