import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEngineeringComponent } from './system-engineering.component';

describe('SystemEngineeringComponent', () => {
  let component: SystemEngineeringComponent;
  let fixture: ComponentFixture<SystemEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
