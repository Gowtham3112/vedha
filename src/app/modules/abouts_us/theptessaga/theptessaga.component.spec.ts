import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheptessagaComponent } from './theptessaga.component';

describe('TheptessagaComponent', () => {
  let component: TheptessagaComponent;
  let fixture: ComponentFixture<TheptessagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheptessagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheptessagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
