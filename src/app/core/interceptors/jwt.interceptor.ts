import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { Router } from '@angular/router';

export class jwtInterceptor implements HttpInterceptor {
  constructor(private localService: LocalStorageService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token: string | null = this.localService.getToken();
   let authReq : any;
    if (token) {
      authReq =  req.clone({
        setHeaders: { Authorization: 'Bearer ' + token },
      });
    }
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403 || err.status === 400 && err.error.codeError === 'INSUFFICIENT_AUTHENTICATION' ) {
          this.localService.destroyToken();
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error(err.error.message || err.message));
      })
     
    );
    
  }
 
};
