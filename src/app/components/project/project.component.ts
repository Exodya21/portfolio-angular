import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { SlideInterface } from '../carrussel/slide.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  // @Input () project_name: string = "" || 'a';

  idProject :any
  dataProject :any = {}

  // slides: SlideInterface[] = [
  //   { url: 'assets/img/projects/dombom-1.webp', title: 'beach', milisegs: 8000 }, // img preview
  //   { url: 'assets/img/projects/app_for_food-1.webp', title: 'boat', milisegs: 10000 },
  //   { url: 'assets/img/projects/death_note-1.webp', title: 'forest', milisegs: 12000 },
  //   { url: 'assets/img/projects/byte_consultorio-1.webp', title: 'city', milisegs: 13000  },
  //   { url: 'assets/img/projects/the_meeting_point_repository-1.webp', title: 'italy', milisegs: 14000 },
  // ];

  slides: SlideInterface[] = []
  auxiliar_slides : SlideInterface[] = [
    { url: 'assets/img/projects/dombom-1.webp', title: 'beach', milisegs: 8000 }, // img preview
    { url: 'assets/img/projects/app_for_food-1.webp', title: 'boat', milisegs: 10000 },
    { url: 'assets/img/projects/death_note-1.webp', title: 'forest', milisegs: 12000 },
    { url: 'assets/img/projects/byte_consultorio-1.webp', title: 'city', milisegs: 13000  },
    { url: 'assets/img/projects/the_meeting_point_repository-1.webp', title: 'italy', milisegs: 14000 },
  ];


  isLoaded = false;


  constructor (
    private http: HttpClient,
    public _DB: InfoPaginaService,
    private route: ActivatedRoute
    // private router: Router,
  ) {
    // this.router.navigate(['/myprojects', 'a']); -> darle valor al param
    this.idProject = this.route.snapshot.paramMap.get("id");
    this.get_Project();

    // this.dataProject = sessionStorage.getItem(`${this.idProject}`)
    //   ? JSON.parse(sessionStorage.getItem(`${this.idProject}`) || '{}')
    //   // : this._DB.projects[`${this.idProject}`] || this.project;
    //   : this.get_Project();


    // if ( !sessionStorage.getItem(`${this.idProject}`) ) {
    //   sessionStorage.setItem(`${this.idProject}`, JSON.stringify(this.dataProject))
    // }


    // console.log(this.idProject);

    // console.log(this.dataProject);
    // console.log(_DB.projects_list);
    // console.log(_DB.projects_list_preview);


    // console.log(sessionStorage.getItem(`${this.idProject}`));
  }

  private get_Project() {
    this.http
      .get(`https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app/projects/${this.idProject}.json`)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.dataProject = res;
        this.slides = this.dataProject.carrusel ? this.dataProject.carrusel : this.auxiliar_slides ;

        console.log(this.dataProject);
      } )
  }

}


