import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  getAllTodos,
  getAllTodosFailure,
  getAllTodosSuccess,
} from '../actions';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodoService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTodos),
      mergeMap(() =>
        this.todosService.getAllTodos().pipe(
          map((todos) => getAllTodosSuccess({ todos })),
          catchError((err) => of(getAllTodosFailure({ payload: err })))
        )
      )
    )
  );
}
