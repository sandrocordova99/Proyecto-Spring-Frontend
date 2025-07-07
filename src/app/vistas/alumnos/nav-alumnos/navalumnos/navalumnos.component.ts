import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/servicios/seguridad/auth-service.service';

@Component({
  selector: 'app-navalumnos',
  templateUrl: './navalumnos.component.html',
  styleUrls: ['./navalumnos.component.css']
})
export class NavalumnosComponent {
  constructor(private authService: AuthServiceService, private router: Router) { }

  cerrarSesion(): void {
    this.authService.eliminarToken(); // o localStorage.removeItem si preferís
    this.router.navigate(['/login']);
  }
}

