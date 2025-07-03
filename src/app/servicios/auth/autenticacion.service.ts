import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestAlumnoDTO } from 'src/app/modelos/alumnos/RequestAlumnoDTO';
import { UsuariosLogin } from 'src/app/modelos/UsuariosLogin';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }


  url = "http://localhost:8080/auth"

  login(dto: UsuariosLogin): Observable<any> {
    return this.http.post<any>(this.url + "/login", dto);
  }

  logout(auth: String): Observable<any> {
    return this.http.post<any>(this.url + "/logout", auth);
  }
}
