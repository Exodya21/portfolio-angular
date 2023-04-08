import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
// import { ItemComponent } from './pages/item/item.component';
import { MyProjectsComponent } from './pages/myprojects/myprojects.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
// import { TerminosComponent } from './pages/terminos/terminos.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, pathMatch:'full' },
  { path: 'myprojects', component: MyProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: NotfoundComponent },
  // { path: 'item', component: ItemComponent },
  // { path: 'terminos', component: TerminosComponent },
  // { path: '**', pathMatch:'full', redirectTo:'portfolio' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
