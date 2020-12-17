import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgegapComponent } from './knowledgegap.component';

describe('KnowledgegapComponent', () => {
  let component: KnowledgegapComponent;
  let fixture: ComponentFixture<KnowledgegapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgegapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgegapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
