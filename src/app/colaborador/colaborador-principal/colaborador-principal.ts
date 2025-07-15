import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-colaborador-principal',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './colaborador-principal.html',
  styleUrl: './colaborador-principal.css',
})
export class ColaboradorPrincipal {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    localStorage.removeItem('id');
    localStorage.removeItem('tipo');

    this.router.navigate(['']);
  }
}
