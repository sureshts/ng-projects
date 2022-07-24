import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pence'
})
export class PencePipe implements PipeTransform {

  transform(pence: number): string {
    pence = Math.round(pence);
    return "£" + Math.round(pence/100).toString() + "." + (pence % 100).toString().padStart(2, '0');
  }

}
