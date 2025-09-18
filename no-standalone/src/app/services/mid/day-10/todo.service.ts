import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { BehaviorSubject, Observable, of, timer, switchMap, map } from 'rxjs';

import { Todo } from '../../../models/mid/day-10/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly _todos$ = new BehaviorSubject<Todo[]>([
  {
    id: 0,
    title: 'First todo',
    done: false,
  },
  ]);
  private readonly _dueTime = 500;

  addTodo(title: string) {
    const todo: Todo = {
        id: this._todos.length,
        title: title,
        done: false,
    }
    this._todos$.next([...this._todos, todo]);
  }

  toggleTodo(id: number) {
    const updatedTodos = this._todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    this._todos$.next(updatedTodos);
  }

  getTodos$(): Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  titleExist(title: string) {
    const exists = this._todos.some(t => t.title.toLowerCase() === title.toLowerCase())
    return of(exists);
  }

  checkTitleExistAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ titleExists: boolean } | null> => {
      if (!control.value)
        return of(null);
      return timer(this._dueTime).pipe(
        switchMap(() => this.titleExist(control.value)),
        map((exists) => exists ? { titleExists: true } : null)
      )
    }
  }

  private get _todos() { return this._todos$.value }
}
