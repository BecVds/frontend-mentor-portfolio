import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaDashboardRoutingModule } from './social-media-dashboard-routing.module';
import { SocialMediaDashboardComponent } from './social-media-dashboard.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { MainDisplayCardComponent } from './main-display-card/main-display-card.component';

@NgModule({
  declarations: [SocialMediaDashboardComponent, OverviewCardComponent, MainDisplayCardComponent],
  imports: [
    CommonModule,
    SocialMediaDashboardRoutingModule,
    SharedComponentsModule,
  ],
})
export class SocialMediaDashboardModule {}
