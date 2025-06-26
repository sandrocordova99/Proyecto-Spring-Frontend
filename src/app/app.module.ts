import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../vistas/user/user.component';
import { AdministradoresComponent } from './vistas/administradores/administradores.component';
import { AlumnosComponent } from './vistas/alumnos/alumnos.component';
import { CategoriasComponent } from './vistas/categorias/categorias.component';
import { CursosComponent } from './vistas/cursos/cursos.component';
import { GradosComponent } from './vistas/grados/grados.component';
import { ProfesorComponent } from './vistas/profesor/profesor.component';
import { SeccionComponent } from './vistas/seccion/seccion.component';
import { LoginComponent } from './vistas/auth/login/login.component';
import { LogoutComponent } from './vistas/auth/logout/logout.component';
import { EliminarUserComponent } from './vistas/user/eliminar-user/eliminar-user.component';
import { ListarAlumnosComponent } from './vistas/alumnos/listar-alumnos/listar-alumnos.component';
import { CrearAlumnosComponent } from './vistas/alumnos/crear-alumnos/crear-alumnos.component';
import { ActualizarAlumnosComponent } from './vistas/alumnos/actualizar-alumnos/actualizar-alumnos.component';
import { CrearCursosComponent } from './vistas/cursos/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './vistas/cursos/listar-cursos/listar-cursos.component';
import { BorrarCursosComponent } from './vistas/cursos/borrar-cursos/borrar-cursos.component';
import { ActualizarCursosComponent } from './vistas/cursos/actualizar-cursos/actualizar-cursos.component';
import { CrearGradosComponent } from './vistas/grados/crear-grados/crear-grados.component';
import { AsignarGradosComponent } from './vistas/grados/asignar-grados/asignar-grados.component';
import { AsignarCursosComponent } from './vistas/grados/asignar-cursos/asignar-cursos.component';
import { ListarGradosComponent } from './vistas/grados/listar-grados/listar-grados.component';
import { AsignarAlumnosComponent } from './vistas/grados/asignar-alumnos/asignar-alumnos.component';
import { CrearProfesorComponent } from './vistas/profesor/crear-profesor/crear-profesor.component';
import { ListarProfesorComponent } from './vistas/profesor/listar-profesor/listar-profesor.component';
import { AsignarProfesorComponent } from './vistas/profesor/asignar-profesor/asignar-profesor.component';
import { AsignarCategoriasComponent } from './vistas/profesor/asignar-categorias/asignar-categorias.component';



@NgModule({
  declarations: [
    UserComponent,
    AdministradoresComponent,
    AlumnosComponent,
    CategoriasComponent,
    CursosComponent,
    GradosComponent,
    ProfesorComponent,
    SeccionComponent,
    LoginComponent,
    LogoutComponent,
    EliminarUserComponent,
    ListarAlumnosComponent,
    CrearAlumnosComponent,
    ActualizarAlumnosComponent,
    CrearCursosComponent,
    ListarCursosComponent,
    BorrarCursosComponent,
    ActualizarCursosComponent,
    CrearGradosComponent,
    AsignarGradosComponent,
    AsignarCursosComponent,
    ListarGradosComponent,
    AsignarAlumnosComponent,
    CrearProfesorComponent,
    ListarProfesorComponent,
    AsignarProfesorComponent,
    AsignarCategoriasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
