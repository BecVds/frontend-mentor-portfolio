import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorAppRoutingModule } from './calculator-app-routing.module';
import { CalculatorAppComponent } from './calculator-app.component';


@NgModule({
  declarations: [
    CalculatorAppComponent
  ],
  imports: [
    CommonModule,
    CalculatorAppRoutingModule
  ]
})
export class CalculatorAppModule { }
