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
  projects: any = [];
  projects_name: any = [];

  isLoaded = false;

  constructor( private http: HttpClient ) {
    this.getItems()
    this.get_InfoGeneral()
    this.get_InfoDescription()
    this.get_InfoProfesions()
    this.get_InfoProjects()
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

  private get_InfoProjects() {
    this.http
      .get( this.uriGeneral('/projects') )
      .subscribe( (res) => {
        this.isLoaded = true;
        this.projects = res;

        this.projects.forEach( (project: any) => {
          // console.log( project.project_name )
          this.projects_name.push( project.project_name )
        });

        console.log(res);
        console.log(this.projects_name);

      } )
  }
}
