import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ListarAlumnosComponent } from './vistas/alumnos/listar-alumnos/listar-alumnos.component';
import { AppComponent } from './app.component';
import { AlumnoEditDTOComponent } from './DTO/alumnoDTO/alumno-edit-dto/alumno-edit-dto.component';
import { AlumnoGradoResponseDTOComponent } from './DTO/alumnoDTO/alumno-grado-response-dto/alumno-grado-response-dto.component';
import { RequestAlumnoDTOComponent } from './DTO/alumnoDTO/request-alumno-dto/request-alumno-dto.component';
import { ResponseAlumnoDTOComponent } from './DTO/alumnoDTO/response-alumno-dto/response-alumno-dto.component';
import { CategoriaRequestDTOComponent } from './DTO/categoriaDTO/categoria-request-dto/categoria-request-dto.component';

// Importá tus componentes acá

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    AlumnoEditDTOComponent,
    AlumnoGradoResponseDTOComponent,
    RequestAlumnoDTOComponent,
    ResponseAlumnoDTOComponent,
    CategoriaRequestDTOComponent
    // y demás componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
