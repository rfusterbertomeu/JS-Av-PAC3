import { Action, createReducer, on } from '@ngrx/store';
import {
  completeAllTodos,
  completeTodo,
  createTodo,
  deleteCompletedTodos,
  deleteTodo,
  getAllTodos,
  getAllTodosFailure,
  getAllTodosSuccess,
  updateTodo,
} from '../actions';
import { TodoDto } from '../models/todo.dto';

export interface TodoState {
  todos: TodoDto[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new TodoDto('Terminar práctica 2')],
  loading: false,
  loaded: false,
  error: null,
};

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new TodoDto(title)],
  })),

  on(completeTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: true };
        } else {
          return todo;
        }
      }),
    ],
  })),

  on(updateTodo, (state, { id, title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        } else {
          return todo;
        }
      }),
    ],
  })),

  on(deleteTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loadeD: false,
    todos: [...state.todos.filter((todo) => todo.id !== id)],
  })),

  on(getAllTodos, (state) => ({ ...state, loading: true })),

  on(getAllTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos],
  })),

  on(getAllTodosFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
  })),

  on(completeAllTodos, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.map((todo) => ({ ...todo, done: true }))],
  })),

  on(deleteCompletedTodos, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.filter((todo) => !todo.done)],
  }))
);

export function todoReducer(
  state: TodoState | undefined,
  action: Action
): TodoState {
  return _todoReducer(state, action);
}
