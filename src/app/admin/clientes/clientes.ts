import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SoftwareModel, TipoClienteModel } from '../../models/modelos.model';
import { ClienteService } from '../../service/Cliente/cliente-service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  softwares: SoftwareModel[] = [];
  tipoCliente: TipoClienteModel[] = [];
  clienteForm!: FormGroup;

  constructor(public clienteService: ClienteService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarListaSoftwares();
    this.inicializarFormulario();
    this.inicializarListaTipoClientes();
  }

  private inicializarFormulario(): void {
    this.clienteForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      tipoCliente: ['', Validators.required],
      softwares: ['', Validators.required],
    });
  }

  private inicializarListaSoftwares(): void {
    this.clienteService.obtenerSoftwares().subscribe((data) => {
      this.softwares = data;
    });
  }

  private inicializarListaTipoClientes(): void {
    this.clienteService.obtenerTipoClientes().subscribe((data) => {
      this.tipoCliente = data;
    });
  }

  registrarCliente(): void {
    if (this.clienteForm.valid) {
      const formValue = this.clienteForm.value;

      const clienteDTO = {
        nombreCliente: formValue.nombreCliente,
        tipoCliente: Number(formValue.tipoCliente),
        softwares: formValue.softwares.map((id: string) => Number(id)),
      };

      this.clienteService.agregarCliente(clienteDTO).subscribe(
        (resp) => console.log('Cliente registrado:', resp),
        (error) => console.error('Error en registro:', error)
      );
    }
  }
}
