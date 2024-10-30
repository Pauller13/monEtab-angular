import { Component } from '@angular/core';
import { PieChartComponent } from "./pie-chart/pie-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
