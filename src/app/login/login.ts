import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  correo: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = new URLSearchParams();
    body.set('correo', this.correo);
    body.set('password', this.password);

    this.http
      .post<any>('http://localhost:8080/auth/login', body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        withCredentials: true,
      })
      .subscribe({
        next: (res) => {
          console.log('Login correcto', res);

          const tipo = res.tipo;
          const id = res.id;

          localStorage.setItem('tipo', tipo);
          localStorage.setItem('id', id);

          if (tipo === 'usuario') {
            this.router.navigate(['/vistaUsuario']);
          } else if (tipo === 'colaborador') {
            this.router.navigate(['/vistaColaborador']);
          } else if (tipo === 'admin') {
            this.router.navigate(['/vistaAdmin']);
          }
        },
        error: () => {
          console.log('Credenciales inválidas');
          alert('Correo o contraseña incorrectos');
        },
      });
  }
}
