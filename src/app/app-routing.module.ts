import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursejsComponent } from './course-js/coursejs/coursejs.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { DevNotesComponent } from './home/portfolio/dev-notes/dev-notes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'course-js',
    component: CoursejsComponent
  },
  {
    path: 'dev-notes',
    component: DevNotesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HomeModule]
})
export class AppRoutingModule {


}


