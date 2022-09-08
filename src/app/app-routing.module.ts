import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendMentorTasksModule } from './frontend-mentor-tasks/frontend-mentor-tasks.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'frontend-mentor-tasks',
    loadChildren: () => FrontendMentorTasksModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
