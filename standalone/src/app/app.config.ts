import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { LoggerService } from './services/beginner/day/eight/logger/logger.service';
import { loggerServiceFactory } from './services/beginner/day/eight/logger/logger.factory';
import { errorInterceptor } from './interceptors/mid/day-06/error.interceptor';
import { authInterceptor } from './interceptors/mid/day-06/auth.interceptor';

export const IS_DEV = new InjectionToken<boolean>('IS_DEV');

export const loggerProvider = {
  provide: LoggerService,
  useFactory: loggerServiceFactory,
  deps: [IS_DEV]
}

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    {provide: IS_DEV, useValue: true}, loggerProvider,
    provideHttpClient(
      withInterceptors([errorInterceptor, authInterceptor])
    ),
  ]
};
