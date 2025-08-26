import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../../../models/mid/day-04/todo';

@Pipe({
  name: 'customFilter',
  pure: true,
})
export class CustomFilterPipe implements PipeTransform {

  transform(todos: Todo[], search: string): Todo[] {

    if (!todos?.length) return [];
    if (!search) return todos;

    const term = search.toLowerCase();
    return todos.filter(
      todo =>`${todo.id} ${todo.title.toLowerCase()}`.includes(term)
    );
  }
}
