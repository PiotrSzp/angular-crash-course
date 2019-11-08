import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }

  //Set dynamic classes
  setClasses() {
    let classes = {
      'todo': true,
      'is-completed': this.todo.completed
    };

    return classes;
  }

  //Handle 'completed' toggle
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  //Handle deleting todods
  onDelete(todo) {

  }


}
