import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyProjectsComponent {

  element = false;
  fade = 'shortcuts'
  filterClass = 'filters animate__animated animate__fadeInDown'
  back = 'btn_readMore'


  constructor(public _DB: InfoPaginaService) {
  }

  listOfProjects = this._DB.listOfProjects


  filterByCurrentProjects() {
    this.listOfProjects = this._DB.listOfProjects.sort(function (a :any, b :any) {
      if (a.project_id < b.project_id) {
        return 1;
      }
      if (a.project_id > b.project_id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  filterByDoneProjects() {
    this.listOfProjects = this._DB.listOfProjects.sort(function (a :any, b :any) {
      if (a.project_id > b.project_id) {
        return 1;
      }
      if (a.project_id < b.project_id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  filterByDevTools() {
    this.listOfProjects = this._DB.listOfProjects.sort(function (a :any, b :any) {
      if (a.project_count_devTools < b.project_count_devTools) {
        return 1;
      }
      if (a.project_count_devTools > b.project_count_devTools) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  filterByCodeInProgress() {
    this.filterByCurrentProjects()

    this.listOfProjects = this._DB.listOfProjects.filter((project :any) => project.project_state !== "In production")
  }
  filterByInProduction() {
    this.filterByCurrentProjects()

    this.listOfProjects = this._DB.listOfProjects.filter((project :any) => project.project_state === "In production")
  }


  id_shortcuts = (id: string) => {
    let res = ''
    return ( res = '#' + id )
  };

  showData() {
    return (
      this.filterClass = 'filters animate__animated animate__fadeInDown',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      this.element = true
    );
  }

  hideData() {
    return (
      this.filterClass = 'filters animate__animated animate__fadeOutUp',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      setTimeout(()=>{
        this.element = false
      }, 500)
    );
  }



}
