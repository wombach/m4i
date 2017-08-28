import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectsComponent }      from './components/projects/projects.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';
import { ProjectScreenComponent }  from './components/projectScreen/project-screen.component';
import { ModelConflictComponent }  from './components/modelConflict/model-conflict.component';
//import { ModelHistoryComponent }  from './components/modelHistory/model-history.component';
import { FrontComponent }      from './components/front/front.component';
import { WpPageComponent }      from './components/wpPage/wp_page.component';
import { ExternalHtmlComponent }      from './components/externalHtml/external_html.component';

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
    path: 'users',
    component: WpPageComponent
  },
  {
    path: 'login',
    component: ExternalHtmlComponent
  },
  {
    path: 'conflict',
    component: ModelConflictComponent
  },
  // {
  //  path: 'history',
  //  component: ModelHistoryComponent
  // },
  {
    path: 'front',
    component: FrontComponent
  } 
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
