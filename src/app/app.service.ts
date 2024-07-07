import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
