import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const token = localStorage.getItem('adminToken');
  console.log('👮‍♀️ AuthGuard kontrolü:', token); // BAK BURAYA
  return !!token;
};
