import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingtonComponent } from './paddington.component';

describe('PaddingtonComponent', () => {
  let component: PaddingtonComponent;
  let fixture: ComponentFixture<PaddingtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaddingtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaddingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
