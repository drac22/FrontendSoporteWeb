import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolicitudService } from '../../../service/Solicitud/solicitud-service';

@Component({
  selector: 'app-asignacion-tabla',
  imports: [CommonModule, RouterModule],
  templateUrl: './asignacion-tabla.html',
  styleUrl: './asignacion-tabla.css',
})
export class AsignacionTabla {
  solicitudes: any[] = [];

  constructor(public solicitudService: SolicitudService) {}

  ngOnInit() {
    this.inicializarListaSolicitudes();
  }

  inicializarListaSolicitudes(): void {
    this.solicitudService.listarSolicitudes().subscribe((data) => {
      this.solicitudes = data;
    });
  }
}
