import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColaboradorModel } from '../../models/modelos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Colaboradorservice {
  private urlListarColaboradores = 'http://localhost:8080/api/colaboradores';
  private urlAgregarColaboradore =
    'http://localhost:8080/api/agregarColaborador';
  private urlEliminarColaborador =
    'http://localhost:8080/api/eliminarColaborador';

  constructor(private http: HttpClient) {}

  obtenerColaboradores(): Observable<ColaboradorModel[]> {
    return this.http.get<ColaboradorModel[]>(this.urlListarColaboradores);
  }

  registrarColaborador(Colaborador: any): Observable<any> {
    return this.http.post(this.urlAgregarColaboradore, Colaborador);
  }

  eliminarColaborador(id: number): Observable<any> {
    return this.http.delete(`${this.urlEliminarColaborador}/${id}`)
  }
}