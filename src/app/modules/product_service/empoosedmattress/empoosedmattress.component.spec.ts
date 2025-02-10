import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoosedmattressComponent } from './empoosedmattress.component';

describe('EmpoosedmattressComponent', () => {
  let component: EmpoosedmattressComponent;
  let fixture: ComponentFixture<EmpoosedmattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoosedmattressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpoosedmattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
