import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameValidatorDirective } from './validators/username-validator.directive';
import { PasswordValidatorDirective } from './validators/password-validator.directive';



@NgModule({
  declarations: [
    UsernameValidatorDirective,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsernameValidatorDirective,
    PasswordValidatorDirective
  ]
})
export class CoreModule { }
