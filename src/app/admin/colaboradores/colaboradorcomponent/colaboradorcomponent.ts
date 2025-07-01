import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolModel } from '../../../models/modelos.model';
import { RolService } from '../../../service/Rol/rol-service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Colaboradorservice } from '../../../service/Colaborador/colaboradorservice';

@Component({
  selector: 'app-colaboradorcomponent',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './colaboradorcomponent.html',
  styleUrl: './colaboradorcomponent.css',
})
export class Colaboradorcomponent {
  rols: RolModel[] = [];
  colaboradorForm!: FormGroup;

  constructor(
    public rolService: RolService,
    public colaboradorService: Colaboradorservice,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarRols();
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.colaboradorForm = this.fb.group({
      nombreColaborador: ['', Validators.required],
      telefonoColaborador: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      idRol: ['', Validators.required],
    });
  }

  inicializarRols(): void {
    this.rolService.obtenerRols().subscribe((data) => {
      this.rols = data;
    });
  }

  registrarColaborador(): void {
    if (this.colaboradorForm.valid) {
      const formValue = this.colaboradorForm.value;
      const ColaboradorDTO = {
        nombreColaborador: formValue.nombreColaborador,
        telefonoColaborador: formValue.telefonoColaborador,
        correo: formValue.correo,
        password: formValue.password,
        idRol: Number(formValue.idRol),
      };
      this.colaboradorService.registrarColaborador(ColaboradorDTO).subscribe(
        (resp) => console.log('Colaborador creado correctamente', resp),
        (error) => console.error('Error creando Colaborador:', error)
      );;
    }
  }
}
