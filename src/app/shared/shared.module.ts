import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchLanguagesComponent } from './switch-languages/switch-languages.component';
/**
 * Modulos necesarios para crear la página multilenguaje
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SwitchThemeComponent } from './switch-theme/switch-theme.component';
// Modulo para el switch del tema claro/oscuro
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    SwitchLanguagesComponent,
    SwitchThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttLoaderFactory,
        deps:[HttpClient]
      }
    }),
    MatSlideToggleModule
  ],exports:[
    SwitchLanguagesComponent,
    SwitchThemeComponent
  ]
})
export class SharedModule { }
export function HttLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/languages/','.json');
}
