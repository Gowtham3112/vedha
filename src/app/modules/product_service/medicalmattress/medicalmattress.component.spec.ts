import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalmattressComponent } from './medicalmattress.component';

describe('MedicalmattressComponent', () => {
  let component: MedicalmattressComponent;
  let fixture: ComponentFixture<MedicalmattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalmattressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalmattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
