import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private readonly todos: Todo[] = []
  
  getTodos(): Todo[] {
    return this.todos;
  }

  addTodos(content: string) {
    this.todos.push({
      id: this.todos.length + 1,
      content
    });
  }

  removeTodo(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos.splice(idx, 1);
  }
}

interface Todo {
  id: number;
  content: string;
}