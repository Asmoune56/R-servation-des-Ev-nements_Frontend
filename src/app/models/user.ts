// src/app/models/user.ts
export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: 'ADMIN' | 'USER';
}
