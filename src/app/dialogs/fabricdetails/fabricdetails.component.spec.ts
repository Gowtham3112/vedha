import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricdetailsComponent } from './fabricdetails.component';

describe('FabricdetailsComponent', () => {
  let component: FabricdetailsComponent;
  let fixture: ComponentFixture<FabricdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
