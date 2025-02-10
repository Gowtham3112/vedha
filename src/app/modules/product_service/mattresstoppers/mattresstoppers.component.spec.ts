import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattresstoppersComponent } from './mattresstoppers.component';

describe('MattresstoppersComponent', () => {
  let component: MattresstoppersComponent;
  let fixture: ComponentFixture<MattresstoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattresstoppersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattresstoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
