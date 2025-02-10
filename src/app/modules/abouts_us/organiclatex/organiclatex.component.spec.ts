import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiclatexComponent } from './organiclatex.component';

describe('OrganiclatexComponent', () => {
  let component: OrganiclatexComponent;
  let fixture: ComponentFixture<OrganiclatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiclatexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganiclatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
