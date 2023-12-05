import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDto } from '../models/todo.dto';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<TodoDto[]> {
    return Object.assign(this.http.get('../assets/mocks/todos.json'));
  }
}
