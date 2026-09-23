import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fancy-input',
  templateUrl: './fancy-input.component.html',
  styleUrls: ['./fancy-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FancyInputComponent),
      multi: true
    }
  ]
})
export class FancyInputComponent implements ControlValueAccessor {
  @Input() placeholder = ''
  @Input() label = ''
  @Input() name = ''
  @Input() required!: string


  @Input() value: any = ''
  disbaled = false
  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

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

  onBlur(){
    this.onTouched()
  }
}
