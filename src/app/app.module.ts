import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Importá todos tus componentes usados en las rutas:
import { ListarAlumnosComponent } from './vistas/alumnos/listar-alumnos/listar-alumnos.component';
import { CrearAlumnosComponent } from './vistas/alumnos/crear-alumnos/crear-alumnos.component';
import { ActualizarAlumnosComponent } from './vistas/alumnos/actualizar-alumnos/actualizar-alumnos.component';
import { LoginComponent } from './vistas/auth/login/login.component';
import { CategoriasComponent } from './vistas/categorias/categorias.component';
import { CrearCursosComponent } from './vistas/cursos/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './vistas/cursos/listar-cursos/listar-cursos.component';
import { AsignarAlumnosComponent } from './vistas/grados/asignar-alumnos/asignar-alumnos.component';
import { CrearGradosComponent } from './vistas/grados/crear-grados/crear-grados.component';
import { ListarGradosComponent } from './vistas/grados/listar-grados/listar-grados.component';
import { AsignarCursosComponent } from './vistas/grados/asignar-cursos/asignar-cursos.component';
import { AsignarCategoriasComponent } from './vistas/profesor/asignar-categorias/asignar-categorias.component';
import { AsignarGradosComponent } from './vistas/profesor/asignar-grados/asignar-grados.component';
import { AsignarProfesorComponent } from './vistas/profesor/asignar-profesor/asignar-profesor.component';
import { CrearProfesorComponent } from './vistas/profesor/crear-profesor/crear-profesor.component';
import { ListarProfesorComponent } from './vistas/profesor/listar-profesor/listar-profesor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './vistas/index/index/index.component';
import { AuthInterceptor } from './interceptores/auth.interceptor';
import { ErrorInterceptor } from './interceptores/error.interceptor';
 
@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    CrearAlumnosComponent,
    ActualizarAlumnosComponent,
    LoginComponent,
    CategoriasComponent,
    CrearCursosComponent,
    ListarCursosComponent,
    AsignarAlumnosComponent,
    CrearGradosComponent,
    ListarGradosComponent,
    AsignarCursosComponent,
    AsignarCategoriasComponent,
    AsignarGradosComponent,
    AsignarProfesorComponent,
    CrearProfesorComponent,
    ListarProfesorComponent,
    IndexComponent,
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
