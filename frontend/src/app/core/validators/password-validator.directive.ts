import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<string>): ValidationErrors | null {
    const data = control.value

    if (!data) return null

    const hasUpperCase = /[A-Z]+/.test(data)

    const hasLowerCase = /[a-z]+/.test(data)

    const hasNumericValue = /[1-9]+/.test(data)

    const containsSpace = data.includes(' ');

    const isValid = hasUpperCase && hasLowerCase && hasNumericValue && !containsSpace
    console.log("Password is valid: ", isValid)
    return !isValid ? { hasUpperCase, hasLowerCase, hasNumericValue, containsSpace } : null

    // const hasUpperCase = /[A-Z]+/.test(data)

    // const isValid = hasUpperCase
    // return !isValid ? true : null;
  }
}
