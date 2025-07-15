import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignacionDTOResponse } from '../../models/modelos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsignacionService {
  private urlMostrarAsignacionesById =
    'http://localhost:8080/api/mostrarAsignacionesById';
  private urlAsignarColaborador =
    'http://localhost:8080/api/asignarColaboradores';

  constructor(private http: HttpClient) {}

  mostrarAsignacionesById(
    idColaborador: number
  ): Observable<AsignacionDTOResponse[]> {
    return this.http.get<AsignacionDTOResponse[]>(
      `${this.urlMostrarAsignacionesById}/${idColaborador}`
    );
  }

  asignarColaborador(asignar: any): Observable<any> {
    return this.http.post(this.urlAsignarColaborador, asignar);
  }
}
