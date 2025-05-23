import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const token = localStorage.getItem('adminToken');
  return !!token; // true ise geçer, yoksa engeller
};
