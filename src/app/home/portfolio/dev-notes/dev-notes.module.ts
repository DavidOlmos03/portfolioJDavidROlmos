// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevNotesRoutingModule } from './dev-notes-routing.module';
import { RouterModule } from '@angular/router';


// Importaciones para Highlightjs
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { HighlightModule } from 'ngx-highlightjs';

// Componentes
import { DevNotesComponent } from './dev-notes.component';
import { AngularCComponent } from './angular-c/angular-c.component';
import { VuejsComponent } from './vuejs/vuejs.component';
import { PhpComponent } from './php/php.component';
import { PythonComponent } from './python/python.component';
import { DockerComponent } from './docker/docker.component';
import { EntornoVirtualComponent } from './entorno-virtual/entorno-virtual.component';


@NgModule({
  declarations: [
    DevNotesComponent,
    AngularCComponent,
    VuejsComponent,
    PhpComponent,
    PythonComponent,
    DockerComponent,
    EntornoVirtualComponent
  ],
  imports: [
    CommonModule,
    DevNotesRoutingModule,
    RouterModule,
    HighlightModule
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
export class DevNotesModule { }
