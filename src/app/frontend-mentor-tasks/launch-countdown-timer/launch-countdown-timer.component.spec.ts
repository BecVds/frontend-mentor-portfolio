import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCountdownTimerComponent } from './launch-countdown-timer.component';

describe('LaunchCountdownTimerComponent', () => {
  let component: LaunchCountdownTimerComponent;
  let fixture: ComponentFixture<LaunchCountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchCountdownTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
