import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NgChartsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  chartType: ChartType = 'pie';
  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Solucionadas', 'Pendientes'],
    datasets: [{ data: [], backgroundColor: ['#2ecc71', '#e74c3c'] }],
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8080/dashboard/solicitudes-resumen')
      .subscribe((data) => {
        this.pieChartData.datasets[0].data = [
          data.solucionadas,
          data.pendientes,
        ];
      });
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem('id');
    localStorage.removeItem('tipo');

    this.router.navigate(['']);
  }
}
