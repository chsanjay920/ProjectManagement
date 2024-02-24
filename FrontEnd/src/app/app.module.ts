import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProjectsComponent } from './Components/Projects/all-projects/all-projects.component';
import { AddProjectComponent } from './Components/Projects/add-project/add-project.component';
import { ProjectCardComponent } from './Components/Projects/project-card/project-card.component';
import { EditProjectComponent } from './Components/Projects/edit-project/edit-project.component';
import { AllEmployeesComponent } from './Components/Employees/all-employees/all-employees.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { ProjectDetailComponent } from './Components/Projects/project-detail/project-detail.component';
import { DoughNutComponent } from './Components/Projects/dough-nut/dough-nut.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AllProjectsComponent,
    AddProjectComponent,
    ProjectCardComponent,
    EditProjectComponent,
    AllEmployeesComponent,
    AddEmployeeComponent,
    ProjectDetailComponent,
    DoughNutComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
