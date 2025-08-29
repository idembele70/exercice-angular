import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const { pathname } = new URL(req.url)

  if (pathname === '/login')
    return next(req);

  console.log('Request intercepted');

  const token = localStorage.getItem('token');

  if (!token) return next(req);
  
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  const newReq = req.clone({
    headers
  });
  
  return next(newReq);
};
