import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursejsComponent } from './course-js/coursejs/coursejs.component';
import { SharedComponent } from './shared/shared/shared.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'course-js', component: CoursejsComponent},
  { path: 'shared', component: SharedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
