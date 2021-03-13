import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyDevelopmentComponent } from './competency-development.component';

describe('CompetencyDevelopmentComponent', () => {
  let component: CompetencyDevelopmentComponent;
  let fixture: ComponentFixture<CompetencyDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
