import { Component, Input } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent {

  element = false;
  fade = ''
  back = 'btn_readMore'

  @Input () parraf_show: string = "";
  @Input () parraf_hidden: string = "";

  constructor( public _DB: InfoPaginaService) {}

  showData() {
    return (
      this.fade = 'animate__animated animate__fadeInDown',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      this.element = true
    );
  }
  hideData() {
    return (
      this.fade = 'animate__animated animate__fadeOutUp',
      this.back = 'btn_readMore animate__animated animate__bounceIn',
      setTimeout(()=>{
        this.element = false
      }, 500)
    );
  }

}
