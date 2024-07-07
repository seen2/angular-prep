import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo } from '../../types/todo';
import { AppService } from '../app.service';
import {v4 as uuid} from 'uuid';


@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  public todo:Todo={id:'',title:'',description:''};

  constructor(private appService:AppService){}

  saveTodo(data:NgForm){
    this.todo.id=uuid();
    this.appService.addTodo({
      ...this.todo
    })
    this.todo={id:'',title:'',description:''};
    alert("Saved Successfully");
  }

}
