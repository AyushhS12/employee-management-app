import { booleanAttribute, Component, forwardRef, Input, numberAttribute, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgModel, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-fancy-input',
  templateUrl: './fancy-input.component.html',
  styleUrls: ['./fancy-input.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => FancyInputComponent),
  //     multi: true
  //   }
  // ]

  // providers: [
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: forwardRef(() => FancyInputComponent),
  //     multi: true
  //   }
  // ]
})
export class FancyInputComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() placeholder = ''
  @Input() label = ''
  @Input() name = ''
  @Input({ transform: numberAttribute }) minLength!: number
  @Input({ transform: booleanAttribute }) required!: boolean
  @Input() type: string = "text"
  @Input() error!: string

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this
    }
  }


  @Input() value: any = ''
  disbaled = false
  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };


  ngOnInit(): void {
    this.control.control?.addValidators(this.validate.bind(this))
    this.control.control?.updateValueAndValidity()
  }

  writeValue(value: any): void {
    this.value = value ?? ''
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean) {
    this.disbaled = isDisabled
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement

    this.value = input.value
    this.onChange(this.value)
  }

  onBlur() {
    this.onTouched()
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value
    if (this.required && (!value || value.trim() === '')) {
      return { required: true }
    }

    if (
      this.minLength &&
      value &&
      value.length < this.minLength) {
      return {
        requiredLength: this.minLength,
        actualLength: value.length
      }
    }

    return null
  }

  // getPasswordErrors(password: NgControl): string {
  //   const errors = password.errors as any
  //   if (!errors) return '';

  //   const messages: string[] = [];

  //   if (errors.hasLowerCase === false) {
  //     messages.push("Password must contain a lowercase")
  //   }
  //   if (errors.hasUpperCase === false) {
  //     messages.push("Password must contain a uppercase")
  //   }
  //   if (errors.hasNumericValue === false) {
  //     messages.push("Password must contain a Numeric value")
  //   }
  //   if (errors.containsSpace === true) {
  //     messages.push("Password cannot contain space")
  //   }
  //   if (errors.required === true) {
  //     messages.push("Password is required")
  //   }
  //   if (password.value && password.value.length < 8) {
  //     messages.push("Password must be 8 characters long")
  //   }

  //   return messages.join(' | ')
  // }
}
