import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceStepperComponent } from './experience-stepper.component';

describe('ExperienceStepperComponent', () => {
  let component: ExperienceStepperComponent;
  let fixture: ComponentFixture<ExperienceStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
