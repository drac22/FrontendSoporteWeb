import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TipoSolicitudModel } from '../../models/modelos.model';
import { SolicitudService } from '../../service/Solicitud/solicitud-service';
import { TipoSolicitudService } from '../../service/TipoSolicitud/tipo-solicitud-service';

@Component({
  selector: 'app-solicitud-componente',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './solicitud-componente.html',
  styleUrl: './solicitud-componente.css',
})
export class SolicitudComponente {
  tipoSolicitud: TipoSolicitudModel[] = [];
  solicitudForm!: FormGroup;

  constructor(
    public solicitudService: SolicitudService,
    public tipoSolicitudService: TipoSolicitudService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarTipoSolicitud();
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.solicitudForm = this.fb.group({
      motivo: ['', Validators.required],
      tipoSolicitud: ['', Validators.required],
    });
  }

  inicializarTipoSolicitud(): void {
    this.tipoSolicitudService.obtenerTipoSolicitudes().subscribe((data) => {
      this.tipoSolicitud = data;
    });
  }

  registratSolicitud(): void {
    if (this.solicitudForm.valid) {
      const idUsuario = parseInt(localStorage.getItem('id') || '0', 10);

      const SolicitudDTO = {
        idUsuario: idUsuario,
        motivo: this.solicitudForm.value.motivo,
        idTipoSolicitud: this.solicitudForm.value.tipoSolicitud,
      };

      this.solicitudService.registrarSolicitud(SolicitudDTO).subscribe(
        (resp) => console.log('Solicitud registrada correctamente', resp),
        (error) => console.error('Error registrando solicitud:', error)
      );
    }
  }
}
