import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatGender',
})
export class FormatGenderPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
