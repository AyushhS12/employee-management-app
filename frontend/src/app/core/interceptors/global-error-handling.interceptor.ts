import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toaster: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    next.handle(request).pipe(
      // tap(data => {
      //   console.log
      // }),
      catchError((error: HttpErrorResponse) => {
        console.log("Http Error: ", error.message)

        if(error.status === 400){
          this.toaster.error("Invalid Data", "Error", {timeOut: 3000})
        }
        else if(error.status === 401){
          this.toaster.error("Login please", "Unauthorized", {timeOut: 3000})
          this.router.navigate(['/atuh/login'])
        }
        else if(error.status === 403){
          this.toaster.error("Not permitted", "Unauthorized", {timeOut: 3000})
        }
        else if(error.status === 404){
          this.toaster.error("Not Found", "Error", {timeOut: 3000})
        }
        else if(error.status >= 500){
          this.toaster.error("Something went wrong", "Server Error", {timeOut: 3000})
        }
        else {
          this.toaster.error("An error occurred", "Error", {timeOut: 3000})
        }
        return throwError(() => error)
      })
    )

    return next.handle(request);
  }
}
