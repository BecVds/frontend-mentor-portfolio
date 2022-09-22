import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendMentorTasksModule } from './frontend-mentor-tasks/frontend-mentor-tasks.module';
import { FRONTEND_MENTOR, HOME } from './home/config/routes-config';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HOME,
  },
  {
    path: HOME,
    component: HomeComponent,
  },
  {
    path: FRONTEND_MENTOR,
    loadChildren: () => FrontendMentorTasksModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
