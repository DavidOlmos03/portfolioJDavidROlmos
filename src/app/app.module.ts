import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseJSModule } from './course-js/course-js.module';
import { HomeModule } from './home/home.module';
import { TranslateService } from '@ngx-translate/core';

/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// Modulo para el switch del tema claro/oscuro
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Modulo para aplicar animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulo para utilizar con primeng
// import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CourseJSModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    }),
    MatSlideToggleModule,
    // TimelineModule
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
