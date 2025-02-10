import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualvssyntheticComponent } from './natrualvssynthetic.component';

describe('NatrualvssyntheticComponent', () => {
  let component: NatrualvssyntheticComponent;
  let fixture: ComponentFixture<NatrualvssyntheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatrualvssyntheticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatrualvssyntheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
