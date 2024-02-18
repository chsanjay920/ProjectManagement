import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from 'src/app/CommonServices/redirect.service';
import { ProjectModel } from 'src/app/Models/project';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent {
  projects!: ProjectModel[];
  constructor(
    private projectApi: ProjectService,
    public redirectService: RedirectService
  ) {}
  
  ngOnInit() {
    this.projectApi.getProjects().subscribe((data: ProjectModel[]) => {
      this.projects = data;
    });
  }
}
