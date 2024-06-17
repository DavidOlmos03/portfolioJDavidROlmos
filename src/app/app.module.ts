import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseJSModule } from './course-js/course-js.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TranslateService } from '@ngx-translate/core';

/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// Importaciones para Highlightjs
// import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    CourseJSModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: <HighlightOptions>{
    //     fullLibraryLoader: () => import('highlight.js'),
    //     lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // verifica si realmente es necesario
    //     lineNumbers: true
    //   }
    // },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
