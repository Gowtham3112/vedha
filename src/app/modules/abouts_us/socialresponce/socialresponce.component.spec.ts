import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialresponceComponent } from './socialresponce.component';

describe('SocialresponceComponent', () => {
  let component: SocialresponceComponent;
  let fixture: ComponentFixture<SocialresponceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialresponceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialresponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
