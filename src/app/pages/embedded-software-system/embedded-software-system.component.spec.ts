import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSoftwareSystemComponent } from './embedded-software-system.component';

describe('EmbeddedSoftwareSystemComponent', () => {
  let component: EmbeddedSoftwareSystemComponent;
  let fixture: ComponentFixture<EmbeddedSoftwareSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedSoftwareSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedSoftwareSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
