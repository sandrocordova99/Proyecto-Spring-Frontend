import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UsuariosLogin } from 'src/app/modelos/UsuariosLogin';
import { AutenticacionService } from 'src/app/servicios/auth/autenticacion.service';
import { AuthServiceService } from 'src/app/servicios/seguridad/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usuarioServicio: AutenticacionService,
    private router: Router, private authService: AuthServiceService) { }

  users: UsuariosLogin = {
    username: '',
    password: ''
  }

  mensajeError: string | null = null;

  Login(): void {
    this.usuarioServicio.login(this.users).subscribe(
      {
        //1.guardo el token
        next: (res) => {
          const token = res.token;

          //2.verifico el token
          if (!token) {
            this.mensajeError = 'No se recibió un token del servidor';
            return;
          }

          //3.guardo el token
          this.authService.guardarToken(token);


          try {
            //4.extraigo los roles del token
            const decoded: any = jwtDecode(token);
            let roles: string[] = [];

            // Si viene como string (un solo rol)
            if (typeof decoded.roles === 'string') {
              roles = [decoded.roles];
            }

            // Si viniera como array (más de un rol en el futuro)
            else if (Array.isArray(decoded.roles)) {
              roles = decoded.roles;
            }

            //5.fijo las rutas luego del logeo
            if (roles.includes('ROLE_ADMIN')) {
              this.router.navigate(['/dashAdmins']);

            } else if (roles.includes('ROLE_PROFESOR')) {
              this.router.navigate(['/dashProfesor']);

            } else if (roles.includes('ROLE_ALUMNO')) {
              this.router.navigate(['/dashAlumnos']);

            } else {
              this.router.navigate(['/index']);
            }
          } catch (error) {
            console.error('Error al decodificar el token:', error);
            this.mensajeError = 'Token inválido o corrupto';
          }
        },
        error: (err) => {
          console.error(err);
          this.mensajeError = 'Usuario o contraseña incorrectos';
        }
      }
    );
  }



}
