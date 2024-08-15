import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

// import { DevNotesComponent } from './home/portfolio/dev-notes/dev-notes.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'',
        redirectTo:'about',
        pathMatch: 'full'
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'resume',
        component:ResumeComponent
      },
      {
        path:'portfolio',
        component:PortfolioComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {


}
