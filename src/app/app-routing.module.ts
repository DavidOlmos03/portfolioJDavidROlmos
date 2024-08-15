import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursejsComponent } from './course-js/coursejs/coursejs.component';
// import { HomeComponent } from './home/home.component';
// import { HomeModule } from './home/home.module';
// import { DevNotesComponent } from './home/portfolio/dev-notes/dev-notes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule),
    // component: HomeComponent
  },
  {
    path: 'dev-notes',
    loadChildren: ()=> import('./home/portfolio/dev-notes/dev-notes.module').then(m=>m.DevNotesModule)
  },
  {
    path: 'course-js',
    component: CoursejsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}


