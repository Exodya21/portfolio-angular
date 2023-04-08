import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ItemComponent } from './pages/item/item.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { MyselfComponent } from './components/myself/myself.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MyProjectsComponent } from './pages/myprojects/myprojects.component';
import { ProjectComponent } from './components/project/project.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReadmoreComponent } from './components/readmore/readmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    ItemComponent,
    TerminosComponent,
    MyselfComponent,
    PresentationComponent,
    MyProjectsComponent,
    ProjectComponent,
    NotfoundComponent,
    ReadmoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
