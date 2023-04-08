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
  back = 'btn_readMore'

  constructor(public _DB: InfoPaginaService) {}

  id_shortcuts = (id: string) => {
    let res = ''
    return ( res = '#' + id )
  };

  showData() {
    return (
      this.fade = 'shortcuts animate__animated animate__fadeInDown',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      this.element = true
    );
  }

  hideData() {
    return (
      this.fade = 'shortcuts animate__animated animate__fadeOutUp',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      setTimeout(()=>{
        this.element = false
      }, 500)
    );
  }

}
