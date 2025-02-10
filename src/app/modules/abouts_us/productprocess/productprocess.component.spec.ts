import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductprocessComponent } from './productprocess.component';

describe('ProductprocessComponent', () => {
  let component: ProductprocessComponent;
  let fixture: ComponentFixture<ProductprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
