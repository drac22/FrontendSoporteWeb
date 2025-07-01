import { Injectable } from '@angular/core';
import { ClienteModel, UsuarioModel } from '../../models/modelos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlListarUsuarios = 'http://localhost:8080/api/usuarios';
  private urlListaClientes = 'http://localhost:8080/api/clientes';
  
  private urlCrearCredencial = 'http://localhost:8080/api/clientes';
  private urlAgregarUsuario = 'http://localhost:8080/api/agregarUsuario';
  private urlEliminarUsuario = 'http://localhost:8080/api/eliminarUsuario';
  

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.urlListarUsuarios);
  }

  agregarUsuario(Usuario: any): Observable<any> {
    return this.http.post(this.urlAgregarUsuario, Usuario);
  }

  crearCredencial(credencial:any):Observable<any>{
    return this.http.post(this.urlCrearCredencial, credencial)
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.urlEliminarUsuario}/${id}`);
  }
}
