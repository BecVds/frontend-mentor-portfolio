import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calculator-app',
    loadChildren: () =>
      import('./calculator-app/calculator-app.module').then(
        (m) => m.CalculatorAppModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendMentorTasksRoutingModule {}
