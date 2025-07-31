import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../services/day/three/auth/auth.service';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token()
  
  const headers = new HttpHeaders({
    Authorization: 'bearer ' + token,
  })
  const newReq = req.clone({
    headers,
  })
  return next(newReq);
};
