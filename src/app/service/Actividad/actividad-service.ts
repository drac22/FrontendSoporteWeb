import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  private urlCrearActividad = 'http://localhost:8080/api/registrarActividad';

  constructor(private http: HttpClient) {}

  registrarActividad(actividad:any):Observable<any>{
    return this.http.post(this.urlCrearActividad, actividad)
  }
}
