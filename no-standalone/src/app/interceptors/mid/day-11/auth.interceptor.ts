import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../../../services/mid/day-11/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.token();

    if (!token)
      return next.handle(request);

    const newReq = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });

    return next.handle(newReq);
  }
}
