import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchCountdownTimerComponent } from './launch-countdown-timer.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchCountdownTimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchCountdownTimerRoutingModule {}
