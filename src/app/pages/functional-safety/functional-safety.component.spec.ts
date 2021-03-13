import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalSafetyComponent } from './functional-safety.component';

describe('FunctionalSafetyComponent', () => {
  let component: FunctionalSafetyComponent;
  let fixture: ComponentFixture<FunctionalSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
