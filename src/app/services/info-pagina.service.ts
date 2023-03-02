import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { InfoPage } from '../interfaces/infoPage.interface';
import { InfoDescription } from '../interfaces/infoDescription.interface';
import { InfoProfesion } from '../interfaces/infoProfesion.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  uriItems: string = 'assets/data/data-items.json';
  uriData: string = 'https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app';

  itemsList: any = {};
  infoGeneral: InfoPage = {};
  description: InfoDescription = {};
  profesions: any = [];

  isLoaded = false;

  constructor( private http: HttpClient ) {
    this.getItems()
    this.get_InfoGeneral()
    this.get_InfoDescription()
    this.get_InfoProfesions()
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

  private uriGeneral( endpoint: string ) {
    return `${this.uriData}${endpoint}.json`
  }

  private get_InfoGeneral() {
    this.http
      .get( this.uriGeneral('/infoPage') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.infoGeneral = res;
        console.log(res);
      } )
  }

  private get_InfoDescription() {
    this.http
      .get( this.uriGeneral('/description') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.description = res;
        console.log(res);
      } )
  }

  private get_InfoProfesions() {
    this.http
      .get( this.uriGeneral('/profesions') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.profesions = res;
        console.log(res);
      } )
  }
}
