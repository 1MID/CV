import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCollapseComponent } from './medium-collapse.component';

describe('MediumCollapseComponent', () => {
  let component: MediumCollapseComponent;
  let fixture: ComponentFixture<MediumCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
