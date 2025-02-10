import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurlatexComponent } from './ourlatex.component';

describe('OurlatexComponent', () => {
  let component: OurlatexComponent;
  let fixture: ComponentFixture<OurlatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurlatexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurlatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
