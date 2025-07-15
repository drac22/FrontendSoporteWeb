import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ColaboradorModel } from '../../models/modelos.model';
import { Colaboradorservice } from '../../service/Colaborador/colaboradorservice';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AsignacionService } from '../../service/Asignacion/asignacion-service';

@Component({
  selector: 'app-asignacion',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './asignacion.html',
  styleUrl: './asignacion.css',
})
export class AsignacionComponent implements OnInit {
  asignacionForm!: FormGroup;
  colaboradores: ColaboradorModel[] = [];

  constructor(
    private fb: FormBuilder,
    private colaboradorService: Colaboradorservice,
    private route: ActivatedRoute,
    private asignacionService: AsignacionService
  ) {}

  ngOnInit(): void {
    this.inicializarColaboradores();
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.asignacionForm = this.fb.group({
      idColaborador: [''],
      esAdmin: [false],
    });
  }

  inicializarColaboradores(): void {
    this.colaboradorService.obtenerColaboradores().subscribe((data) => {
      this.colaboradores = data;
    });
  }

  asignarColaborador(): void {
    if (this.asignacionForm.valid) {
      const idSolicitud = parseInt(
        this.route.snapshot.params['idSolicitud'],
        10
      );
      const SolicitudDTO = {
        idSolicitud: idSolicitud,
        idColaborador: this.asignacionForm.value.idColaborador,
        esCoordinador: this.asignacionForm.value.esAdmin,
      };
      this.asignacionService.asignarColaborador(SolicitudDTO).subscribe(
        (resp) => console.log('Colaborador asignado correctamente', resp),
        (error) => console.error('Error asignando Colaborador:', error)
      );
    }
  }
}
