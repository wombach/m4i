import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { ProjectService }  from './services/project.service';
// import { WpApiModule, WpApiLoader, WpApiStaticLoader} from 'wp-api-angular';

// export function WpApiLoaderFactory(http: Http) {
//  return new WpApiStaticLoader(http, 'http://192.168.2.10/wp-json/', /* namespace is optional, default: '/wp/v2' */);
// }

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
//    WpApiModule.forRoot({ provide: WpApiLoader, useFactory: (WpApiLoaderFactory), deps: [Http] }),
    ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    DashboardComponent,
    FrontComponent,
    ProjectDetailComponent,
    ProjectScreenComponent,
    WpPageComponent,
    ExternalHtmlComponent,
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
