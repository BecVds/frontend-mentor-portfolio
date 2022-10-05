import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CALCULATOR_APP,
  LAUNCH_COUNTDOWN_TIMER,
  ROCK_PAPER_SCISSORS_GAME,
  SOCIAL_MEDIA_DASHBOARD,
} from '../home/config/routes-config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: CALCULATOR_APP,
  },
  {
    path: CALCULATOR_APP,
    loadChildren: () =>
      import('./calculator-app/calculator-app.module').then(
        (m) => m.CalculatorAppModule
      ),
  },
  {
    path: SOCIAL_MEDIA_DASHBOARD,
    loadChildren: () =>
      import('./social-media-dashboard/social-media-dashboard.module').then(
        (m) => m.SocialMediaDashboardModule
      ),
  },
  {
    path: LAUNCH_COUNTDOWN_TIMER,
    loadChildren: () =>
      import('./launch-countdown-timer/launch-countdown-timer.module').then(
        (m) => m.LaunchCountdownTimerModule
      ),
  },
  {
    path: ROCK_PAPER_SCISSORS_GAME,
    loadChildren: () =>
      import('./rock-paper-scissors-game/rock-paper-scissors-game.module').then(
        (m) => m.RockPaperScissorsGameModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendMentorTasksRoutingModule {}
