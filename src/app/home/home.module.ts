import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
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

  ],
  imports: [
    CommonModule,
    CourseJSModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
})
export class HomeModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'src/assets/languages','.json');
}
