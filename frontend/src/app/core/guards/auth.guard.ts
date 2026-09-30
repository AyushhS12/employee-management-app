import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of } from 'rxjs';
import { EmployeeService } from 'src/app/employee/services/employee.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(EmployeeService)
  const router = inject(Router)
  const toastr = inject(ToastrService)

  return service.checkValidity().pipe(
    map(data => {
      if (data) {
        if (data.valid) {
          return true
        }
      }
      toastr.error("Please login!", "Failure", { timeOut: 2000 })
      return router.createUrlTree(['/auth/login']);
    }),
    catchError(error => {
      console.log(error.status)
      if (error.status !== 401) {
        if (error.status !== 403) {
          toastr.error("Server not responding", "Failure", { timeOut: 2000 })
          return of(router.createUrlTree(['/auth/login']));
        }
        toastr.error("Unauthorized", "Failure", { timeOut: 2000 })
        return of(false);
      }
      return of(false)
    }))
};
