import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoSolicitudModel } from '../../models/modelos.model';

@Injectable({
  providedIn: 'root',
})
export class TipoSolicitudService {
  private urlListarTipoSolicitud = 'http://localhost:8080/api/tipoSolicitudes';

  constructor(public http: HttpClient) {}

  public obtenerTipoSolicitudes(): Observable<TipoSolicitudModel[]> {
    return this.http.get<TipoSolicitudModel[]>(this.urlListarTipoSolicitud)
  }
}
