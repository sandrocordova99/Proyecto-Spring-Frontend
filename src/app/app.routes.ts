import { Routes } from '@angular/router';
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
import { AdministradoresComponent } from './vistas/administradores/administradores.component';
import { IndexComponent } from './vistas/index/index/index.component';
import { AuthGuard } from './guardianes/auth.guard';

export const routes: Routes = [

    //Default
    { path: 'index', component: IndexComponent },

    //alumnos
    {
        path: 'listarAlumnos', component: ListarAlumnosComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_ALUMNO'] }
    },
    {
        path: 'crearAlumnos', component: CrearAlumnosComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_ALUMNO'] }
    },
    {
        path: 'actualizarAlumnos', component: ActualizarAlumnosComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_ALUMNO'] }
    },

    //admin
    {
        path: 'listarAdmins', component: AdministradoresComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
    },

    //auth
    { path: 'login', component: LoginComponent },

    //categorias
    { path: 'asignarCategorias', component: CategoriasComponent },

    //cursos
    { path: 'actualizarCursos', component: ActualizarAlumnosComponent },
    { path: 'crearCursos', component: CrearCursosComponent },
    { path: 'listarCursos', component: ListarCursosComponent },

    //Grados
    { path: 'asignarAlumnos', component: AsignarAlumnosComponent },
    { path: 'crearGrados', component: CrearGradosComponent },
    { path: 'listarGrados', component: ListarGradosComponent },
    { path: 'asignarCursos', component: AsignarCursosComponent },

    //Profesor
    {
        path: 'asignarCategorias', component: AsignarCategoriasComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_PROFESOR'] }
    },
    {
        path: 'asignarGrados', component: AsignarGradosComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_PROFESOR'] }
    },
    {
        path: 'asignarProfesor', component: AsignarProfesorComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_PROFESOR'] }
    },
    {
        path: 'crearProfesor', component: CrearProfesorComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_PROFESOR'] }
    },
    {
        path: 'listarProfesor', component: ListarProfesorComponent, canActivate: [AuthGuard],
        data: { roles: ['ROLE_PROFESOR'] }
    },









];
