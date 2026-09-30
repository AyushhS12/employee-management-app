import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toaster: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes("/api/auth") || request.url.includes("/employee/exists")) {
      return next.handle(request);
    }
    const token = localStorage.getItem(environment.AUTH_TOKEN);
    if (!token || token === "") {
      this.router.navigate(['/auth/login'], { state: { error: "Please Login" } })
      this.toaster.error("Please Login!", "Request Failed", { timeOut: 3000 })
      return EMPTY
    }
    const req = request.clone({ setHeaders: { Authorization: "Bearer " + token } })
    return next.handle(req);
  }
}
