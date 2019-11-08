import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) {
  }

  ngOnInit() {
  }

  //Set dynamic classes
  setClasses() {
    return {
      'todo': true,
      'is-completed': this.todo.completed
    };
  }

  //Handle toggling 'completed'
  onToggle(todo) {
    // UI togle
    todo.completed = !todo.completed;
    // Server toggle
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  //Handle deleting todods
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }


}
