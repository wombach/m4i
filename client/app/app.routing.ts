import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectsComponent }      from './components/projects/projects.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';
import { ProjectScreenComponent }  from './components/projectScreen/project-screen.component';
import { FrontComponent }      from './components/front/front.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/front',
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
    path: 'screen/:id',
    component: ProjectScreenComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'front',
    component: FrontComponent
  } 
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
