import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaRequestDTO } from 'src/app/modelos/categorias/CategoriaRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/cat"

  crearCategorias(dto: CategoriaRequestDTO): Observable<any> {
    return this.http.post(this.url + "/crear" , dto);
  }
}
