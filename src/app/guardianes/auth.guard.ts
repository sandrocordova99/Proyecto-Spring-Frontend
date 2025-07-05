import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    //Si no hay token pal login
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      //lee el token 
      const decoded: any = jwtDecode(token);

      //verificar si es uno o muchos roles
      const roles: string[] = Array.isArray(decoded.roles)
        ? decoded.roles
        : [decoded.roles]; // Por si viene como string

      //Toma los roles requeridos para acceder a esta ruta -> app.config.routes -> “Oye ruta, ¿qué roles necesitas para entrar?”
      const expectedRoles: string[] = route.data['roles'];

      //si no se especifica los roles se deja pasar nomas 
      if (!expectedRoles || expectedRoles.length === 0) {
        return true;
      }

      //Verifica si alguno de los roles del usuario coincide con alguno de los requeridos por la ruta.
      const tienePermiso = expectedRoles.some(role => roles.includes(role));

      //Si el usuario no tiene permiso, lo redirige a una vista tipo no-autorizado y devuelve false para bloquear el acceso.
      if (!tienePermiso) {
        this.router.navigate(['/no-autorizado']);
        return false;
      }


      //si hay rol se va para la ruta del rol
      return true;  

    } catch (err) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
