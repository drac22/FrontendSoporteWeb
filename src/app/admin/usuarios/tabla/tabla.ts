import { Component } from '@angular/core';
import { UsuarioModel } from '../../../models/modelos.model';
import { UsuarioService } from '../../../service/Usuario/usuario-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-usuarios',
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class TablaUsuarios {
  usuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.inicializarUsuarios();
  }

  inicializarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id:number):void{
    const confirmar = confirm('¿Eliminar Usuario definitivamente?');
    if(confirmar){
      this.usuarioService.eliminarUsuario(id).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter((c) => c.idUsuario !== id);
          console.log(`Usuario ${id} eliminado`);
        },
        error: (err) => console.error('Error eliminando:', err),
      });
    }
  }
}
