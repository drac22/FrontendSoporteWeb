import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolModel } from '../../models/modelos.model';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private urlListarRols = 'http://localhost:8080/api/rols';

  constructor(private http: HttpClient) {}

  obtenerRols(): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(this.urlListarRols);
  }
}
