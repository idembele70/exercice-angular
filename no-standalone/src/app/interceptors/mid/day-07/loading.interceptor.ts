import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { catchError, throwError, finalize, tap } from 'rxjs';

import { LoadingService } from '../../../services/mid/day-07/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setState(true);
  console.log('Loading...');
  return next(req).pipe(
    catchError(err => throwError(()=>err)),
    tap(event => {
      if (event.type === HttpEventType.Response)
        console.log('Done')
    }),
    finalize(() => {
      loadingService.setState(false);
      console.log('End')
    })
  );
};
