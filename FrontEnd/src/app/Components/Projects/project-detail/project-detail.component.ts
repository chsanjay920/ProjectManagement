import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';

import { ProjectService } from 'src/app/Services/project.service';
import { ProjectAssignmentService } from 'src/app/Services/project-assignment.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { EmployeeModel } from 'src/app/Models/employee';
import { sprintModel } from 'src/app/Models/sprint';
import { SprintService } from 'src/app/Services/sprint.service';
import { userstoryModel } from 'src/app/Models/userstory';
import { UserstoryService } from 'src/app/Services/userstory.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  data: any = [
    { name: 'New', value: 30, color: '#b2dafb' },
    { name: 'Active', value: 40, color: '#fc8d2b' },
    { name: 'Resolved', value: 20, color: '#32c563' },
    { name: 'Blocker', value: 10, color: '#ff4778' },
  ];
  currentSelectedProject: any;
  EmployeesList: any[] = [];
  EmployeesInProject: any[] = [];
  SprintsInProjects: any[] = [];
  UserStoriesList: any[] = [];
  employeeForm = new FormGroup({
    selectedEmployees: new FormControl([]),
  });
  SprintForm = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    SprintName: new FormControl(
      'Sprint#' +
        (Math.floor(Math.random() * 10000) + 10000)
          .toString()
          .substring(1)
          .toString()
    ),
  });
  UserstoryForm = new FormGroup({
    sprintId: new FormControl(''),
    employeeId: new FormControl(''),
    userstoryName: new FormControl(
      (Math.floor(Math.random() * 10000) + 10000)
        .toString()
        .substring(1)
        .toString(),
      [Validators.required]
    ),
    description: new FormControl('', [Validators.required]),
    status: new FormControl(''),
  });

  constructor(
    private projectservice: ProjectService,
    private sprintservice: SprintService,
    private projectAssignment: ProjectAssignmentService,
    private employeesService: EmployeeService,
    private userstoryservice: UserstoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const projectId = params['id'];
      if (projectId) {
        this.projectservice.getProjectById(projectId).subscribe(
          (project) => {
            this.currentSelectedProject = project;
            this.getEmployeesInProject(project);
            this.getSprintsInProject(project);
          },
          (error) => {
            console.error('Error fetching project:', error);
            // Handle error appropriately (e.g., show a user-friendly message)
          }
        );
      } else {
        console.error('Project ID is missing');
        // Handle missing project ID
      }
    });
    this.getAllEmployees();
  }

  getEmployeesInProject(project: any) {
    this.projectAssignment.getEmployeesByProject(project._id).subscribe(
      (employees: any) => {
        this.EmployeesInProject = employees;
        console.log(this.EmployeesInProject);
      },
      (error: any) => {
        console.error('Error fetching employees in project:', error);
      }
    );
  }
  getSprintsInProject(project: any) {
    this.sprintservice.getSprintByProject(project._id).subscribe(
      (sprints: any) => {
        this.SprintsInProjects = sprints;
        console.log('sprints', this.SprintsInProjects);
      },
      (error: any) => {
        console.error('Error fetching employees in project:', error);
      }
    );
  }
  getAllEmployees() {
    this.employeesService.getEmployees().subscribe(
      (data: EmployeeModel[]) => {
        this.EmployeesList = data.map((emp) => ({ ...emp, selected: false }));
      },
      (error) => {
        console.error('Error fetching all employees:', error);
        // Handle error appropriately (e.g., show a user-friendly message)
      }
    );
  }

  listUserStories(sprint: any) {
    var newCount = 0;
    var activeCount = 0;
    var resolvedCount = 0;
    var blockerCount = 0;
    this.userstoryservice.getUserStoriesBySprint(sprint._id).subscribe(
      (userstorylist: any) => {
        this.UserStoriesList = userstorylist;
        this.UserStoriesList.forEach((obj) => {
          switch (obj.status) {
            case 'new':
              newCount++;
              break;
            case 'old':
              activeCount++;
              break;
            case 'regular':
              blockerCount++;
              break;
            case 'regular':
              resolvedCount++;
              break;
          }
        });
        this.data[0].value = 50;
        this.data[1].value = 50;
        this.data[2].value = 0;
        this.data[3].value = 0;

        console.log(this.data);
      },
      (error: any) => {
        console.error('Error fetching all employees:', error);
      }
    );
  }
  onSelectedEmployeesSubmit() {
    const selectedEmployees = this.EmployeesList.filter(
      (emp: any) => emp.selected
    ).map((e: any) => e._id);
    console.log(selectedEmployees);
    this.projectAssignment
      .PutProjectTeam({
        project_id: this.currentSelectedProject._id,
        employees_id: selectedEmployees,
      })
      .subscribe(
        (data: any) => {
          alert('New Employee Added Successfully.');
          // Handle success appropriately
        },
        (error: any) => {
          console.error('Error adding employees to project:', error);
          // Handle error appropriately (e.g., show a user-friendly message)
        }
      );
  }

  getRandomName() {
    return (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1)
      .toString();
  }
  onSprintFormSubmit() {
    if (this.SprintForm.status == 'VALID') {
      var sprint: sprintModel = {
        project_id: this.currentSelectedProject._id,
        sprint_name: this.SprintForm.value.SprintName!,
        start_date: this.SprintForm.value.startDate!,
        end_date: this.SprintForm.value.endDate!,
      };
      this.sprintservice.postSprint(sprint).subscribe((data: any) => {
        alert('New Sprint Added Successfully.');
        window.location.reload();
      });
    } else {
      alert('Enter Valid Data! All Feilds Are Required.');
    }
  }

  onUserStoryFormSubmit() {
    if (this.UserstoryForm.status == 'VALID') {
      var userstory: userstoryModel = {
        sprint_id: this.UserstoryForm.value.sprintId!,
        employee_id: this.UserstoryForm.value.employeeId!,
        name: this.UserstoryForm.value.userstoryName!,
        description: this.UserstoryForm.value.description!,
        status: 'NEW',
      };
      debugger;
      this.userstoryservice.postUserStory(userstory).subscribe((data: any) => {
        alert('New User Story Added Successfully.');
        window.location.reload();
      });
    } else {
      alert('Enter Valid Data! All Feilds Are Required.');
    }
  }
}
