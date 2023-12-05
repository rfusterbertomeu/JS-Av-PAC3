import { ActionReducerMap } from '@ngrx/store';
import { TodosEffects } from './todos/effects/todos.effects';
import * as reducers from './todos/reducers';

export interface AppState {
  todosApp: reducers.TodoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todosApp: reducers.todoReducer,
};

export const EffectsArray: any[] = [TodosEffects];
