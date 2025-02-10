import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectslatexComponent } from './defectslatex.component';

describe('DefectslatexComponent', () => {
  let component: DefectslatexComponent;
  let fixture: ComponentFixture<DefectslatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectslatexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefectslatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
