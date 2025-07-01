import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private urlRegistrarSolicitud =
    'http://localhost:8080/api/registrarSolicitud';
  private urlListarSolicitudesById =
    'http://localhost:8080/api/mostrarSolicitudesByIdUsuario';
  private urlListarSolicitudes =
    'http://localhost:8080/api/solicitudes';

  constructor(public http: HttpClient) {}

  public registrarSolicitud(Solicitud: any): Observable<any> {
    return this.http.post(this.urlRegistrarSolicitud, Solicitud);
  }

  public listarSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlListarSolicitudes);
  }

  public listarSolicitudesById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlListarSolicitudesById}/${id}`);
  }
}
