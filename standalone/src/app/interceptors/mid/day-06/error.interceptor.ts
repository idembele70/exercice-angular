import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

import { ErrorService } from '../../../services/mid/day-06/error.service'

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  //const errorService = inject(ErrorService)

  return next(req).pipe(
    catchError(errRes => {
      if (errRes.status === 401)
        router.navigate(['/login']);

      if (errRes.status === 500) {
        //errorService.setMessage('Erreur serveur');
        alert('Erreur server')
      }
    return throwError(() => errRes)
    })
  );
};
