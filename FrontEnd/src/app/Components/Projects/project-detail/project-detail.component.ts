import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { TempdataService } from 'src/app/Services/tempdata.service';
import { Chart, registerables } from 'chart.js';
import { EmployeeService } from 'src/app/Services/employee.service';
import { EmployeeModel } from 'src/app/Models/employee';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  currentSelectedProject: any;
  data: any = [
    { name: 'Active', value: 30 },
    { name: 'Resolved', value: 50 },
    { name: 'InProgress', value: 20 },
  ];
  EmployeesList:any[] = [];
  constructor(
    private projectservice: ProjectService,
    private employeesService:EmployeeService,
    private router: Router,
    private tempservice: TempdataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.projectservice.getProjectById(params['id']).subscribe((Project) => {
        this.currentSelectedProject = Project;
        const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
        Chart.register(...registerables);
        const pieChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: this.data.map((d: { name: any }) => d.name),
            datasets: [
              {
                data: this.data.map((d: { value: any }) => d.value),
                backgroundColor: ['#f44336', '#2196f3', '#9e9e9e'],
              },
            ],
          },
          options: {
            // Add customization options as needed
          },
        });
      });
    });
  }
  getAllEmployees()
  {
    this.employeesService.getEmployees().subscribe((data: EmployeeModel[]) => {
      this.EmployeesList = data;
    });
  }
}
