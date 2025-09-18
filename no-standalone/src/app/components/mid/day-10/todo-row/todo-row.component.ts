import { ChangeDetectionStrategy, Component, Input,} from '@angular/core';

import { Todo } from '../../../../models/mid/day-10/todo';
import { TodoService } from '../../../../services/mid/day-10/todo.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrl: './todo-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoRowComponent {
  @Input({ required: true }) todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };

  constructor(private readonly todoService: TodoService) {};


  onToggleTodo() {
    this.todoService.toggleTodo(this.todo.id)
  }
}
