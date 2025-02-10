import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeddingComponent } from './bedding.component';

describe('BeddingComponent', () => {
  let component: BeddingComponent;
  let fixture: ComponentFixture<BeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
