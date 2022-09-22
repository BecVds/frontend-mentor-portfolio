import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchCountdownTimerRoutingModule } from './launch-countdown-timer-routing.module';
import { LaunchCountdownTimerComponent } from './launch-countdown-timer.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NumberCardComponent } from './countdown-timer/number-card/number-card.component';

@NgModule({
  declarations: [LaunchCountdownTimerComponent, CountdownTimerComponent, NumberCardComponent],
  imports: [
    CommonModule,
    LaunchCountdownTimerRoutingModule,
    SharedComponentsModule,
  ],
})
export class LaunchCountdownTimerModule {}
