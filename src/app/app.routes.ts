import { Routes } from '@angular/router';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'view-todo',
    component: ViewTodoComponent,
  },
  {
    path: 'create-todo',
    component: CreateTodoComponent,
  },
];
