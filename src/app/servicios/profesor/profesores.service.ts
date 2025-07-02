import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoEditDTO } from 'src/app/modelos/alumnos/AlumnoEditDTO';
import { RequestAlumnoDTO } from 'src/app/modelos/alumnos/RequestAlumnoDTO';
import { AsignarCategoriasDTO } from 'src/app/modelos/profesor/AsignarCategoriasDTO';
import { AsignarGradoProfesorDTO } from 'src/app/modelos/profesor/AsignarGradoProfesorDTO';
import { ProfesorEditDTO } from 'src/app/modelos/profesor/ProfesorEditDTO';
import { ProfesorRequestDTO } from 'src/app/modelos/profesor/ProfesorRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/profesor"

  listarProfesor(): Observable<any> {
    return this.http.get<any>(this.url + "/listar");
  }

  crearProfesor(dto: ProfesorRequestDTO): Observable<any> {
    return this.http.post<any>(this.url + "/crear", dto);
  }

  asignarGrados(dto: AsignarGradoProfesorDTO): Observable<any> {
    return this.http.post<any>(this.url + "/asignarGrados", dto);
  }

  actualizarProfesor(dto: ProfesorEditDTO): Observable<any> {
    return this.http.put<any>(this.url + "/actualizar", dto);
  }

  asignarCategorias(dto: AsignarCategoriasDTO): Observable<any> {
    return this.http.post<any>(this.url + "/asignarCategorias", dto);
  }
}
