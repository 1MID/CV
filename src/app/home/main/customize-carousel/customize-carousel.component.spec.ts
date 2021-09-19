import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCarouselComponent } from './customize-carousel.component';

describe('CustomizeCarouselComponent', () => {
  let component: CustomizeCarouselComponent;
  let fixture: ComponentFixture<CustomizeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
