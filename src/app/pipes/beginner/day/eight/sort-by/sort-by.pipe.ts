import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../../models/day/eight/user';

@Pipe({
  name: 'sortBy',
  standalone: true
})

export class SortByPipe implements PipeTransform {

  transform(users: User[], filter: keyof User): User[] {
      return [...users].sort((a,b) => +a[filter] - +b[filter])
  }
}

