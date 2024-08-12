import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevNotesComponent } from './dev-notes.component';
import { AngularCComponent } from './angular-c/angular-c.component';
import { VuejsComponent } from './vuejs/vuejs.component';
import { PhpComponent } from './php/php.component';
import { PythonComponent } from './python/python.component';
import { DockerComponent } from './docker/docker.component';
import { EntornoVirtualComponent } from './entorno-virtual/entorno-virtual.component';

const routes: Routes = [
  {
    path: '',
    component: DevNotesComponent,
    children: [
      {
        path: '',
        redirectTo: 'angular',
        pathMatch: 'full'
      },
      {
        path: 'angular',
        component: AngularCComponent
      },
      {
        path: 'vuejs',
        component: VuejsComponent
      },
      {
        path: 'php',
        component: PhpComponent
      },
      {
        path: 'python',
        component: PythonComponent
      },
      {
        path: 'docker',
        component: DockerComponent
      },
      {
        path: 'venv',
        component: EntornoVirtualComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevNotesRoutingModule { }
