import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ClienteModel,
  SoftwareModel,
  TipoClienteModel,
} from '../../models/modelos.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlListarClientes = 'http://localhost:8080/api/clientes';
  private urlListarSoftwares = 'http://localhost:8080/api/softwares';
  private urlListarTipoClientes = 'http://localhost:8080/api/tipoClientes';
  private urlAgregarCliente = 'http://localhost:8080/api/agregarCliente';

  private urlEditarCliente = 'http://localhost:8080/api/softwares';
private urlEliminarCliente = 'http://localhost:8080/api/eliminarCliente';

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(this.urlListarClientes);
  }

  obtenerSoftwares(): Observable<SoftwareModel[]> {
    return this.http.get<SoftwareModel[]>(this.urlListarSoftwares);
  }

  obtenerTipoClientes(): Observable<TipoClienteModel[]> {
    return this.http.get<TipoClienteModel[]>(this.urlListarTipoClientes);
  }

  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(this.urlAgregarCliente, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.urlEliminarCliente}/${id}`);
  }
}
