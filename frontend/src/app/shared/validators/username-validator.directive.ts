import { HttpClient } from '@angular/common/http';
import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UsernameValidatorDirective),
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value

    return this.http.get<{ exists: boolean } | null>(environment.apiBaseUrl + "/employee/exists/" + value)
    // .subscribe((data) => {
    //   console.log(data)
    // })
    // return of(null)
  }
}
