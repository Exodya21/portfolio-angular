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

  constructor (
    public _DB: InfoPaginaService,
    private route: ActivatedRoute
    // private router: Router,
  ) {
    // this.router.navigate(['/myprojects', 'a']);
    this.idProject = this.route.snapshot.paramMap.get("id");

    this.dataProject = sessionStorage.getItem(`${this.idProject}`)
      ? JSON.parse(sessionStorage.getItem(`${this.idProject}`) || '{}')
      : _DB.projects[`${this.idProject}`] || 'a';

    if ( !sessionStorage.getItem(`${this.idProject}`) )
      sessionStorage.setItem(`${this.idProject}`, JSON.stringify(this.dataProject))

    // console.log(this.dataProject);
  }

}


