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



@NgModule({
  declarations: [
    UserComponent,
    AdministradoresComponent,
    AlumnosComponent,
    CategoriasComponent,
    CursosComponent,
    GradosComponent,
    ProfesorComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
