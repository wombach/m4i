import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { trigger, state, style, transition, animate } from '@angular/animations';

import { FormsModule }    from '@angular/forms';
import { HttpModule, Http }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { ProjectsComponent }      from './components/projects/projects.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { WpPageComponent }   from './components/wpPage/wp_page.component';
import { ExternalHtmlComponent }   from './components/externalHtml/external_html.component';
import { FrontComponent }   from './components/front/front.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';
import { ProjectScreenComponent }  from './components/projectScreen/project-screen.component';
import { ModelConflictComponent }  from './components/modelConflict/model-conflict.component';
import { ModelHistoryComponent }  from './components/modelHistory/model-history.component';

//import {TabViewModule} from 'primeng/primeng';


import { ProjectService }  from './services/project.service';
import { ModelService }  from './services/model.service';
// import { WpApiModule, WpApiLoader, WpApiStaticLoader} from 'wp-api-angular';

// export function WpApiLoaderFactory(http: Http) {
//  return new WpApiStaticLoader(http, 'http://192.168.2.10/wp-json/', /* namespace is optional, default: '/wp/v2' */);
// }
// import { D3Service } from 'd3-ng2-service'; // <-- import statement

@NgModule({
  imports: [
    BrowserModule,
 //   BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    routing,
//    WpApiModule.forRoot({ provide: WpApiLoader, useFactory: (WpApiLoaderFactory), deps: [Http] }),
   // TabViewModule,
    ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    DashboardComponent,
    FrontComponent,
    ProjectDetailComponent,
    ProjectScreenComponent,
    ModelConflictComponent,
    // ModelHistoryComponent,
    WpPageComponent,
    ExternalHtmlComponent,
  ],
  providers: [
    ProjectService,
    ModelService,
  //  D3Service, // <-- provider registration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
