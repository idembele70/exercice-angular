import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Role } from '../../../models/mid/day-09/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly storageKey = 'role-storageKey-day-09-mid';
  private role$ = new BehaviorSubject<Role>(this.loadRoleFromStorage());

  getRole$() {
    return this.role$.asObservable();
  }

  getRole() {
    return this.role$.value;
  }

  setRole(role: Role) {
    this.role$.next(role);
    this.saveRoleToStorage(role);
  }

  isAdmin() {
    return this.role$.value === 'admin';
  }

  private loadRoleFromStorage() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : 'user';
  }

  private saveRoleToStorage(role: Role) {
    localStorage.setItem(this.storageKey, JSON.stringify(role));
  }
}
