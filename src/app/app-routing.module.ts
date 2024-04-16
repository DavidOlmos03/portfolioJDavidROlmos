import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursejsComponent } from './course-js/coursejs/coursejs.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'course-js', component: CoursejsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HomeModule]
})
export class AppRoutingModule { }
