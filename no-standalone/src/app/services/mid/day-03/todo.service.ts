import { Injectable } from '@angular/core';
import { Todo } from '../../../models/mid/day-03/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly storageKey = 'todos';
  private readonly todos$ = new BehaviorSubject<Todo[]>(this.loadFromStorage());
  
  getTodos$() {
    return this.todos$.asObservable();
  }

  addTodo(title: string) {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    const todos = [...this.todos$.value, newTodo];
    this.updateState(todos);
  }

  toggleTodo(id: number) {
    const todos = this.todos$.value.map(t =>
      t.id === id ? {...t, completed: !t.completed } : t );
    this.updateState(todos);
  }

  private updateState(todos: Todo[]) {
    this.todos$.next(todos);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
}
