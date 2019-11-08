import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosApiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {
  }

  // Fetch Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ this.todosApiUrl }${ this.todosLimit }`);
  }

  // Toggle Completed (updt on sever)
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${ this.todosApiUrl }/${ todo.id }`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete form sever
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosApiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add to server
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosApiUrl, todo, httpOptions);
  }
}
