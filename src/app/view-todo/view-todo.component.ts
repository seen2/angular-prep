import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Todo } from '../../types/todo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-todo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.css',
})
export class ViewTodoComponent {
  constructor(private readonly appService: AppService) {
  }
  getTodos():Todo[]{
    return this.appService.getTodos()
  }

  deleteTodo(id: string) {
    this.appService.deleteTodo(id);
  }
}
