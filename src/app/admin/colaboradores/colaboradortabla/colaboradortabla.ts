import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Colaboradorservice } from '../../../service/Colaborador/colaboradorservice';
import { ColaboradorModel } from '../../../models/modelos.model';

@Component({
  selector: 'app-colaboradortabla',
  imports: [CommonModule, RouterModule],
  templateUrl: './colaboradortabla.html',
  styleUrl: './colaboradortabla.css',
})
export class Colaboradortabla {
  colaboradores: ColaboradorModel[] = [];

  constructor(public colaboradorService: Colaboradorservice) {}

  ngOnInit(): void {
    this.inicializarColaboradores();
  }

  inicializarColaboradores(): void {
    this.colaboradorService.obtenerColaboradores().subscribe((data) => {
      this.colaboradores = data;
    });
  }

  eliminarColaborador(id: number): void {
    const confirmar = confirm('¿Eliminar Usuario definitivamente?');
    if(confirmar){
      this.colaboradorService.eliminarColaborador(id).subscribe({
        next: () => {
          this.colaboradores = this.colaboradores.filter((c) => c.idColaborador !== id);
          console.log(`Colaborador ${id} eliminado`);
        },
        error: (err) => console.error('Error eliminando:', err),
      });
    }
  }
}
