import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  /*Esta cosa atrapa la respuesta de mi back y si da un error me muestra algo */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        // Si el backend responde con error 401, redirige al login
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }

        // Propaga el error para que Angular lo sepa
        return throwError(() => error);
      })
    );
  }
}
