import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../../models/modelos.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../../../service/Cliente/cliente-service';

@Component({
  selector: 'app-tabla-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class TablaClientes {
  clientes: ClienteModel[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.inicializarClientes();
  }

  inicializarClientes(): void {
    this.clienteService.obtenerClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  eliminarCliente(id: number): void {
    const confirmar = confirm('¿Eliminar cliente definitivamente?');

    if (confirmar) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter((c) => c.idCliente !== id);
          console.log(`Cliente ${id} eliminado`);
        },
        error: (err) => console.error('Error eliminando:', err),
      });
    }
  }
}
