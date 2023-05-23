import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  // @Input () project_name: string = "" || 'a';

  idProject :any
  dataProject :any = {}

  isLoaded = false;


  constructor (
    private http: HttpClient,
    public _DB: InfoPaginaService,
    private route: ActivatedRoute
    // private router: Router,
  ) {
    // this.router.navigate(['/myprojects', 'a']);
    this.idProject = this.route.snapshot.paramMap.get("id");

    this.dataProject = sessionStorage.getItem(`${this.idProject}`)
      ? JSON.parse(sessionStorage.getItem(`${this.idProject}`) || '{}')
      // : this._DB.projects[`${this.idProject}`] || this.project;
      : this.get_Project();


    if ( !sessionStorage.getItem(`${this.idProject}`) )
      sessionStorage.setItem(`${this.idProject}`, JSON.stringify(this.dataProject))

    console.log(this.dataProject);
    console.log(this.idProject);
    console.log(_DB.listOfProjects);



  }

  private get_Project() {
    this.http
      .get(`https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app/projects/${this.idProject}.json`)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.dataProject = res;

        console.log(this.dataProject);
      } )
  }

}


