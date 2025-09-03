export interface User {
  name: string;
  status: 'connected' | 'disconnected';
  role: Role;
}

export type Role = 'admin' | 'user';
