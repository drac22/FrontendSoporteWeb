import { Component } from '@angular/core';
import { ClienteModel, UsuarioModel } from '../../models/modelos.model';
import { UsuarioService } from '../../service/Usuario/usuario-service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../service/Cliente/cliente-service';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: UsuarioModel[] = [];
  clientes: ClienteModel[] = [];
  usuarioForm!: FormGroup;

  constructor(
    public usuarioService: UsuarioService,
    public clienteService: ClienteService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarListaClientes();
    this.inicializarFormulario();
  }

  inicializarListaClientes(): void {
    this.clienteService.obtenerClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  inicializarFormulario(): void {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      telefonoUsuario: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      asociadoCliente: ['', Validators.required],
    });
  }

  registrarUsuario(): void {
    if (this.usuarioForm.valid) {
      const formValue = this.usuarioForm.value;

      const usuarioDTO = {
        nombreUsuario: formValue.nombreUsuario,
        telefonoUsuario: formValue.telefonoUsuario,
        correo: formValue.correo,
        password: formValue.password,
        idCliente: Number(formValue.asociadoCliente),
      };

      this.usuarioService.agregarUsuario(usuarioDTO).subscribe(
        (resp) => console.log('Usuario creado correctamente', resp),
        (error) => console.error('Error creando usuario:', error)
      );
    }
  }
}
