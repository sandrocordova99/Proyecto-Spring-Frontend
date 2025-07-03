import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoEditDTO } from 'src/app/modelos/alumnos/AlumnoEditDTO';
import { RequestAlumnoDTO } from 'src/app/modelos/alumnos/RequestAlumnoDTO';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/alu"

  listarAlumnos(): Observable<any> {
    return this.http.get<any>(this.url + "/listar");
  }

  crearAlumnos(dto: RequestAlumnoDTO): Observable<any> {
    return this.http.post<any>(this.url + "/crear", dto);
  }

  actualizarAlumnos(dto:AlumnoEditDTO): Observable<any> {
    return this.http.put<any>(this.url + "/actualizar" , dto);
  }

}
