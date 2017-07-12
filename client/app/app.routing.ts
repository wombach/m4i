import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectsComponent }      from './components/projects/projects.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
