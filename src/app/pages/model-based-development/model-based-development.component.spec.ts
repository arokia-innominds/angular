import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBasedDevelopmentComponent } from './model-based-development.component';

describe('ModelBasedDevelopmentComponent', () => {
  let component: ModelBasedDevelopmentComponent;
  let fixture: ComponentFixture<ModelBasedDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelBasedDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBasedDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
