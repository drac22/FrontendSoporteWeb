import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsignacionDTOResponse } from '../../models/modelos.model';
import { AsignacionService } from '../../service/Asignacion/asignacion-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-colaborador-tabla',
  imports: [CommonModule, RouterModule],
  templateUrl: './colaborador-tabla.html',
  styleUrl: './colaborador-tabla.css',
})
export class ColaboradorTabla {
  asignacionesbyId: AsignacionDTOResponse[] = [];

  constructor(private asignacionService: AsignacionService) {}

  ngOnInit() {
    this.inicializarListaAsignacionesByIdColaborador(5);
  }

  inicializarListaAsignacionesByIdColaborador(idColaborador: number) {
    this.asignacionService
      .mostrarAsignacionesById(idColaborador)
      .subscribe((data) => (this.asignacionesbyId = data));
  }
}