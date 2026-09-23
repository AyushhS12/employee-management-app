import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-fancy-select',
  templateUrl: './fancy-select.component.html',
  styleUrls: ['./fancy-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FancySelectComponent),
      multi: true
    }
  ]
})
export class FancySelectComponent implements ControlValueAccessor {
  @Input() name = ''
  @Input({ required: true }) items: any[] = []
  @Input({ required: true }) title: string = ''
  @Input() required!: string
  @Input() selected!: string

  value = ''

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

  onSelectionChange(event: MatSelectChange) {
    this.value = event.value
    this.onChange(this.value)
  }

  onBlur() {
    this.onTouched()
  }
}
