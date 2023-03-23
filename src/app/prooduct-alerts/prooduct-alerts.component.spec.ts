import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProoductAlertsComponent } from './prooduct-alerts.component';

describe('ProoductAlertsComponent', () => {
  let component: ProoductAlertsComponent;
  let fixture: ComponentFixture<ProoductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProoductAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProoductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
