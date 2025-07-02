import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoEditDTO } from 'src/app/modelos/alumnos/AlumnoEditDTO';
import { RequestAlumnoDTO } from 'src/app/modelos/alumnos/RequestAlumnoDTO';
import { CursoEditDTO } from 'src/app/modelos/curso/CursoEditDTO';
import { CursoRequestDTO } from 'src/app/modelos/curso/CursoRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }


  url = "http://localhost:8080/curso"

  listarCursos(): Observable<any> {
    return this.http.get<any>(this.url + "/listar");
  }

  crearCursos(dto: CursoRequestDTO): Observable<any> {
    return this.http.post<any>(this.url + "/crear", dto);
  }

  actualizarCursos(dto: CursoEditDTO): Observable<any> {
    return this.http.put<any>(this.url + "/actualizar", dto);
  }

  eliminarCursos(id: String): Observable<any> {
    return this.http.delete<any>(this.url + "/borrar/" + id);
  }

}
