import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  // { path: 'terminos', component: TerminosComponent },
  { path: '**', pathMatch:'full', redirectTo:'portfolio' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
