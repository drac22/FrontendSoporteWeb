import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsignacionDTOResponse } from '../../models/modelos.model';
import { AsignacionService } from '../../service/Asignacion/asignacion-service';
import { RouterModule } from '@angular/router';
import { SolicitudService } from '../../service/Solicitud/solicitud-service';

@Component({
  selector: 'app-colaborador-tabla',
  imports: [CommonModule, RouterModule],
  templateUrl: './colaborador-tabla.html',
  styleUrl: './colaborador-tabla.css',
})
export class ColaboradorTabla {
  asignacionesbyId: AsignacionDTOResponse[] = [];
  coordinadorSolicitudes: Set<number> = new Set();

  constructor(
    private asignacionService: AsignacionService,
    private solicitudService: SolicitudService
  ) {}

  ngOnInit() {
    const idColaboradorStr = localStorage.getItem('id');
    if (idColaboradorStr) {
      const idColaborador = parseInt(idColaboradorStr, 10);
      this.inicializarListaAsignacionesByIdColaborador(idColaborador);
      this.verificarCoordinador(idColaborador);
    } else {
      console.warn('No hay usuario logueado');
    }
  }

  inicializarListaAsignacionesByIdColaborador(idColaborador: number) {
    this.asignacionService
      .mostrarAsignacionesById(idColaborador)
      .subscribe((data) => (this.asignacionesbyId = data));
  }

  esCoordinador(idSolicitud: number) {
    this.solicitudService.listarSolicitudesById(idSolicitud);
  }

  verificarCoordinador(idColaborador: number) {
    this.solicitudService
      .listarSolicitudes()
      .subscribe((solicitudes: any[]) => {
        solicitudes.forEach((solicitud) => {
          if (
            solicitud.idColaboradorQueEsCoordinador?.idColaborador ===
            idColaborador
          ) {
            this.coordinadorSolicitudes.add(solicitud.idSolicitud);
          }
        });
      });
  }

  cerrarSolicitud(idSolicitud: number): void {
    this.solicitudService.actualizarSolicitud(idSolicitud).subscribe({
      next: () => {
        alert('Solicitud cerrada');
        this.inicializarListaAsignacionesByIdColaborador(
          parseInt(localStorage.getItem('id')!, 10)
        );
      },
      error: () => {
        alert('Error al cerrar la solicitud');
      },
    });
  }
}
