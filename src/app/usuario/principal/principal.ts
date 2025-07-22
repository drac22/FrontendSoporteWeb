import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, RouterModule, DatePipe, CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  notificaciones: any[] = [];
  idUsuario: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.idUsuario = parseInt(localStorage.getItem('id') || '0', 10);
    this.cargarNotificaciones();
  }

  cargarNotificaciones(): void {
    this.http
      .get<any[]>(`http://localhost:8080/api/notificaciones/${this.idUsuario}`)
      .subscribe({
        next: (res) => {
          this.notificaciones = res.map((noti) => ({
            ...noti,
            fecha: new Date(noti.fecha),
          }));
        },
        error: (err) => {
          console.error('Error cargando notificaciones', err);
        },
      });
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem('id');
    localStorage.removeItem('tipo');

    this.router.navigate(['']);
  }
}
