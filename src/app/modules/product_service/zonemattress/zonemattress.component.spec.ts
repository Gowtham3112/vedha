import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonemattressComponent } from './zonemattress.component';

describe('ZonemattressComponent', () => {
  let component: ZonemattressComponent;
  let fixture: ComponentFixture<ZonemattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonemattressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonemattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
