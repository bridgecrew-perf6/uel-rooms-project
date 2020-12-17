import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPapersIndividualComponent } from './tech-papers-individual.component';

describe('TechPapersIndividualComponent', () => {
  let component: TechPapersIndividualComponent;
  let fixture: ComponentFixture<TechPapersIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechPapersIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPapersIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
