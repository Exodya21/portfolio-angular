import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MyProjectsComponent } from './pages/myprojects/myprojects.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'myprojects', component: MyProjectsComponent },
  { path: 'myprojects/:id', component: ProjectComponent },
  { path: 'myprojects/**', component: NotfoundComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: "/portfolio", pathMatch: "full"},
  // { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
