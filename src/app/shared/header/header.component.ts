import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {
  constructor( public _DB: InfoPaginaService ) {}

  isChecked: any;

  public onChange(event: any): void {
    // this.isChecked = event.target['checked'];
    this.isChecked = event;
  }

  public close() {
    this.isChecked = this.isChecked.target['checked'] = false;
  }
}
