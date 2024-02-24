import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dough-nut',
  templateUrl: './dough-nut.component.html',
  styleUrls: ['./dough-nut.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DoughNutComponent implements AfterViewInit {
  constructor() {
    
  }
  @Input()
  Data:any;
  @Input() Id:String = "";

  ngAfterViewInit(): void {
    console.log('Canvas ID:', this.Id);
    this.setupPieChart();
  }
  setupPieChart() {
    const ctx = document.getElementById(this.Id.toString()) as HTMLCanvasElement;
    Chart.register(...registerables);
    const pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.Data.map((d: { name: any }) => d.name),
        datasets: [
          {
            data: this.Data.map((d: { value: any }) => d.value),
            backgroundColor: this.Data.map((d: { color: any }) => d.color),
          },
        ],
      },
      options: {
      },
    });
  }
}
