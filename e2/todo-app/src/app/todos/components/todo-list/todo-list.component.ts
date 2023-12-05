import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  completeAllTodos,
  deleteCompletedTodos,
  getAllTodos,
} from '../../actions';
import { TodoDto } from '../../models/todo.dto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoDto[] = [];
  showActionBtns: boolean;

  constructor(private store: Store<AppState>) {
    this.showActionBtns = false;
  }

  ngOnInit(): void {
    this.store.select('todosApp').subscribe((todosResponse) => {
      this.todos = todosResponse.todos;
      this.showActionBtns = this.todos.length > 0 ? true : false;
    });

    this.store.dispatch(getAllTodos());
  }

  completeAllTasks(): void {
    this.store.dispatch(completeAllTodos());
  }

  deleteCompletedTasks(): void {
    this.store.dispatch(deleteCompletedTodos());
  }
}
