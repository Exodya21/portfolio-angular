import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  uriInfo: string = 'assets/data/data-pagina.json';
  uriItems: string = 'assets/data/data-items.json';
  uriAbout: string = 'https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app/.json';

  info: InfoPagina = {};
  itemsList: any = {};
  equipo: any = {};

  isLoaded = false;

  constructor( private http: HttpClient ) {
    this.getInfo()
    this.getItems()
    this.getAbout()
  }

  private getInfo() {
    this.http
      .get(this.uriInfo)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.info = res;
        console.log(res);
      } )
  }

  private getItems() {
    this.http
      .get(this.uriItems)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.itemsList = res;
        console.log(res);
      } )
  }

  private getAbout() {
    this.http
      .get(this.uriAbout)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.equipo = res;
        console.log(res);
      } )
  }
}
