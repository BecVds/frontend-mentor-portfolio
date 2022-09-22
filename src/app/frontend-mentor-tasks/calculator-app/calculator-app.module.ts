import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorAppRoutingModule } from './calculator-app-routing.module';
import { CalculatorAppComponent } from './calculator-app.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [CalculatorAppComponent, ThemeToggleComponent],
  imports: [CommonModule, CalculatorAppRoutingModule, SharedComponentsModule],
})
export class CalculatorAppModule {}
