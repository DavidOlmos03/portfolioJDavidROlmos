import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CourseJSModule } from '../course-js/course-js.module';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { VuejsModalComponent } from './portfolio/vuejs-modal/vuejs-modal.component';
import { WebSiteEchezModalComponent } from './portfolio/web-site-echez-modal/web-site-echez-modal.component';
import { StreamingNetflixModalComponent } from './portfolio/streaming-netflix-modal/streaming-netflix-modal.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DevNotesComponent } from './portfolio/dev-notes/dev-notes.component';

// Importaciones para Highlightjs
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { HighlightModule } from 'ngx-highlightjs';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    VuejsModalComponent,
    WebSiteEchezModalComponent,
    StreamingNetflixModalComponent,
    DevNotesComponent

  ],
  imports: [
    CommonModule,
    CourseJSModule,
    SharedModule,
    HttpClientModule,
    HighlightModule,
    // Traduction
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    }),

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        fullLibraryLoader: () => import('highlight.js'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // verifica si realmente es necesario
        lineNumbers: true
      }
    },

  ],
})
export class HomeModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'src/assets/languages','.json');
}
