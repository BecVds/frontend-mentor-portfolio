import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorAppComponent } from './calculator-app.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorAppRoutingModule {}
