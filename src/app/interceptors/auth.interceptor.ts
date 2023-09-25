import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EStorageKeys } from '../models/auth.enums';

export const MainInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);

  let token = localStorage.getItem(EStorageKeys.Token);

  request = request.clone({
    setHeaders: {
      'Content-Type': `application/json`,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  return next(request).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        router.navigate(['/auth']);
      }
      return throwError(() => error);
    })
  );
};
