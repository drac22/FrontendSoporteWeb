import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolicitudService } from '../../service/Solicitud/solicitud-service';

@Component({
  selector: 'app-tabla-solicitudes',
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-solicitudes.html',
  styleUrl: './tabla-solicitudes.css',
})
export class TablaSolicitudes {
  solicitudesbyId: any[] = [];

  constructor(public solicitudService: SolicitudService) {}

  ngOnInit() {
    const idUsuarioStr = localStorage.getItem('id');

    if (idUsuarioStr) {
      const idUsuario = parseInt(idUsuarioStr, 10);
      this.inicializarListaSolicitudesById(idUsuario);
    } else {
      console.warn(
        'No hay usuario logueado'
      );
    }
  }

  inicializarListaSolicitudesById(id: number): void {
    this.solicitudService.listarSolicitudesById(id).subscribe(
      (data) => {
        this.solicitudesbyId = data;
      },
      (error) => {
        console.error('❌ Error al obtener las solicitudes:', error);
      }
    );
  }
}
