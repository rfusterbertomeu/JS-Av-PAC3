import { createAction, props } from '@ngrx/store';
import { TodoDto } from '../models/todo.dto';

export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ title: string }>()
);

export const updateTodo = createAction(
  '[TODO] Update todo',
  props<{ id: number; title: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const completeTodo = createAction(
  '[TODO] Complete todo',
  props<{ id: number }>()
);

export const getAllTodos = createAction('[TODOS] Get all');

export const getAllTodosSuccess = createAction(
  '[TODOS] Get all success',
  props<{ todos: TodoDto[] }>()
);

export const getAllTodosFailure = createAction(
  '[TODOS] Get all failure',
  props<{ payload: any }>()
);

export const completeAllTodos = createAction('[TODOS] Complete all todos');

export const deleteCompletedTodos = createAction(
  '[TODO] Delete completed todos'
);
