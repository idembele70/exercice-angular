import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  setItem<T>(key: string, value: T) {
    if (!key) throw new Error('Key is mandatory!');
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string) {
    if (!key) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
      } catch (err) {
          return err;
      }
  }

  removeItem(key:string) {
    if (!key) throw new Error('Key is mandatory!');
    localStorage.removeItem(key);
  }
}
