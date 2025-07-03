import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private TOKEN_KEY = 'auth_token';

  constructor() { }

  guardarToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  
  obtenerToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  eliminarToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.obtenerToken();
  }

  obtenerRoles(): string[] {
    const token = this.obtenerToken();
    if (!token) return [];

    const decoded: any = jwtDecode(token); 
    return decoded.roles || [];
  }

  tieneRol(rol: string): boolean {
    return this.obtenerRoles().includes(rol);
  }
}
