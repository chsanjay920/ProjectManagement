import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from 'src/app/CommonServices/redirect.service';
import { ProjectModel } from 'src/app/Models/project';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent implements OnInit {
  projects!: ProjectModel[];
  isLogedIn: boolean = false;
  isAdmin: boolean = false;
  subscription: any;
  constructor(
    private projectApi: ProjectService,
    public redirectService: RedirectService,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.subscription = this.authService.IsLogedIn.subscribe((data) => {
      this.isLogedIn = data.IsLogin;
      this.isAdmin = data.IsAdmin;
    });
    this.authService.checkToken();
    this.projectApi.getProjects().subscribe((data: ProjectModel[]) => {
      this.projects = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
