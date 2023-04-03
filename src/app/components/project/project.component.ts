import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  element = false;
  fade = ''
  back = 'btn_readMore'

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
