import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../../models/mid/day-05/user';

@Pipe({
  name: 'filterByAge',
  pure: true
})
export class FilterByAgePipe implements PipeTransform {

  transform(users: User[], minAge: number): User[] {
    if (!users?.length) return []
    if (!minAge || minAge < 0) return users;

    const filtered = users.filter(u => u.age >= minAge);
    return filtered;
  }
}
