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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: AllProjectsComponent },
  { path: 'projects/AddProject', component: AddProjectComponent },
  {
    path: 'project/edit',
    component: EditProjectComponent,
  },
  {
    path: 'project/detail',
    component: ProjectDetailComponent,
  },
  {
    path: 'team',
    component: AllEmployeesComponent,
  },
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
