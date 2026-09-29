import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlSegment } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { EmployeeService } from 'src/app/employee/services/employee.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(EmployeeService)
  const router = inject(Router)
  const toastr = inject(ToastrService)

  return service.checkValidity().pipe(map(data => {
    if(data){
      if(data.valid){
        return true
      }
    }
    toastr.error("Please login!", "Failure", {timeOut: 2000})
    return router.createUrlTree(['/employee/profile']);
  }))
};
