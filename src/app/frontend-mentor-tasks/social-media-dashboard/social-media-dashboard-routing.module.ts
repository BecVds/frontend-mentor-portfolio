import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaDashboardComponent } from './social-media-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SocialMediaDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialMediaDashboardRoutingModule {}
