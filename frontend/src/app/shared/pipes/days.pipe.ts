import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {
  transform(value: Date): string {
    const date = value instanceof Date ? value : new Date(value);
    const difference = date.getTime() - new Date().getTime()
    return difference < 0 ? value.toLocaleDateString() : "In " + Math.ceil(difference / (1000 * 60 * 60 * 24)) + " day(s)"
  }
}
