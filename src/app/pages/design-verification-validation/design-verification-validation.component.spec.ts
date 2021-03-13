import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignVerificationValidationComponent } from './design-verification-validation.component';

describe('DesignVerificationValidationComponent', () => {
  let component: DesignVerificationValidationComponent;
  let fixture: ComponentFixture<DesignVerificationValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignVerificationValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignVerificationValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
