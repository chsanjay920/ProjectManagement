import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './Components/Projects/all-projects/all-projects.component';
import { AddProjectComponent } from './Components/Projects/add-project/add-project.component';
import { EditProjectComponent } from './Components/Projects/edit-project/edit-project.component';
import { AllEmployeesComponent } from './Components/Employees/all-employees/all-employees.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { ProjectDetailComponent } from './Components/Projects/project-detail/project-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { BacklogsComponent } from './Components/Projects/backlogs/backlogs.component';
import { SprintsComponent } from './Components/Projects/sprints/sprints.component';
import { AssignStoriesToSprintComponent } from './Components/Projects/assign-stories-to-sprint/assign-stories-to-sprint.component';
import { WorkItemsComponent } from './Components/Projects/work-items/work-items.component';
import { AssignWorkItemsComponent } from './Components/Projects/assign-work-items/assign-work-items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // any logged users 
  { path: 'projects', component: AllProjectsComponent },
  // admin user
  { path: 'projects/AddProject', component: AddProjectComponent },
  // admin user
  {
    path: 'project/edit',
    component: EditProjectComponent,
  },
  // any logged users
  {
    path: 'project/detail',
    component: ProjectDetailComponent,
  },
  {
    path: 'project/backlogs',
    component: BacklogsComponent,
  },
  {
    path: 'project/sprints',
    component: SprintsComponent,
  },
  {
    path: 'project/sprints/assign',
    component: AssignStoriesToSprintComponent,
  },
  {
    path: 'project/workitems',
    component: WorkItemsComponent,
  },
  {
    path: 'project/assign/workitems',
    component: AssignWorkItemsComponent,
  },
  // any logged users
  {
    path: 'team',
    component: AllEmployeesComponent,
  },
  //// admin user
  {
    path: 'team/add',
    component: AddEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
