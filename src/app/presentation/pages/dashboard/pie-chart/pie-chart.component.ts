import { Component, ViewChild } from "@angular/core";
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { ChartOptions } from "../../../../domain/types/chart.type";
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent  {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [55, 45],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Homme", "Femme"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
