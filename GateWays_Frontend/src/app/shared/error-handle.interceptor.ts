import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';

@Injectable()
export class ErrorhandleInterceptor implements HttpInterceptor {

  constructor(private errorhandleService : ErrorHandlerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error)=>{
        let handled = false;
        if(error.statusText === 'Unknown Error'){
          this.errorhandleService.errorMessage.next(error.message);
          handled = true;
        }
        else if(error instanceof HttpErrorResponse){
          if(!!error.status){
            switch (error.status){
              case 500:{
                this.errorhandleService.errorMessage.next(error.message);
                handled = true;
              }
            }
          }

        } 

        if (handled) {
          console.log('return back ');
          return of(error);
        } else {
          this.errorhandleService.errorMessage.next(error.message);
          console.log('throw error back to to the subscriber');
          console.log(error);
          return throwError(()=> {throw error});
        }
      })
    );
  }
}
