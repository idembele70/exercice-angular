import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message: string) {
    const time = new Date().toLocaleTimeString();
    console.log('[%s]: %s', time, message);
  }
}
