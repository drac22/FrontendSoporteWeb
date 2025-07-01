import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignacionDTOResponse } from '../../models/modelos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsignacionService {
  private apiUrl = 'http://localhost:8080/api/mostrarAsignacionesById';

  constructor(private http: HttpClient) {}

  mostrarAsignacionesById(
    idColaborador: number
  ): Observable<AsignacionDTOResponse[]> {
    return this.http.get<AsignacionDTOResponse[]>(
      `${this.apiUrl}/${idColaborador}`
    );
  }
}
