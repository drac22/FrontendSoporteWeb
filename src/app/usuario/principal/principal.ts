import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    localStorage.removeItem('id');
    localStorage.removeItem('tipo');

    this.router.navigate(['']);
  }
}
