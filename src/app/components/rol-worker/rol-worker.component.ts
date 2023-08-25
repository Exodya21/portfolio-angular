import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rol-worker',
  templateUrl: './rol-worker.component.html',
  styleUrls: ['./rol-worker.component.css']
})
export class RolWorkerComponent {

  // @Input () rols_list: RolInterface[] = [];
  @Input () rols_list: any;

  @Input () rol_styles: string = "";

}


