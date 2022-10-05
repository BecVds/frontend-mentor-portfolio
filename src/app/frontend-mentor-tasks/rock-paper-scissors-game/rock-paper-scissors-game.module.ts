import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RockPaperScissorsGameRoutingModule } from './rock-paper-scissors-game-routing.module';
import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SelectionButtonsComponent } from './selection-buttons/selection-buttons.component';
import { SelectedButtonsComponent } from './selected-buttons/selected-buttons.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [RockPaperScissorsGameComponent, SelectionButtonsComponent, SelectedButtonsComponent, ButtonComponent],
  imports: [
    CommonModule,
    RockPaperScissorsGameRoutingModule,
    SharedComponentsModule,
  ],
})
export class RockPaperScissorsGameModule {}
