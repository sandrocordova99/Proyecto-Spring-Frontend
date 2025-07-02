import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoEditDTO } from 'src/app/modelos/alumnos/AlumnoEditDTO';
import { RequestAlumnoDTO } from 'src/app/modelos/alumnos/RequestAlumnoDTO';
import { AsignarGradoDTO } from 'src/app/modelos/curso/AsignarGradoDTO';
import { AsignarAlumnosDTO } from 'src/app/modelos/grado/AsignarAlumnosDTO';
import { GradoRequestDTO } from 'src/app/modelos/grado/GradoRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class GradosService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/grado"

  listarCursos(): Observable<any> {
    return this.http.get<any>(this.url + "/listar");
  }

  crearGrados(dto: GradoRequestDTO): Observable<any> {
    return this.http.post<any>(this.url + "/crear", dto);
  }

  asignarAlumnos(dto: AsignarAlumnosDTO): Observable<any> {
    return this.http.post<any>(this.url + "/asignarAlumnos", dto);
  }

  asignarCursos(dto: AsignarGradoDTO): Observable<any> {
    return this.http.post<any>(this.url + "/asignar", dto);
  }

}
