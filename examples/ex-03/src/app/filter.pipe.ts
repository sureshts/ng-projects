import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.modal';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], filterText: string): any {
    console.log('FilterPipe call');

    if (filterText === '') {
      return users;
    }
    return users.filter((item) => item.gender === filterText);
  }
}
