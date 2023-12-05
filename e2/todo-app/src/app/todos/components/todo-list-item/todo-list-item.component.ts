import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { completeTodo, deleteTodo, updateTodo } from '../../actions';
import { TodoDto } from '../../models/todo.dto';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo!: TodoDto;

  titleInput: UntypedFormControl;
  isEditing: boolean;

  constructor(private store: Store<AppState>) {
    this.isEditing = false;
    this.titleInput = new UntypedFormControl('');
  }

  ngOnInit(): void {
    this.isEditing = false;
    this.titleInput = new UntypedFormControl(this.todo.title, Validators.required);
  }

  completeTask(): void {
    this.store.dispatch(completeTodo({ id: this.todo.id }));
  }

  editTask(): void {
    this.isEditing = true;
    this.titleInput.setValue(this.todo.title);
  }

  deleteTask(): void {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

  submitTask(): void {
    this.isEditing = false;
    if (this.titleInput.valid && this.titleInput.value !== this.todo.title) {
      this.store.dispatch(
        updateTodo({ id: this.todo.id, title: this.titleInput.value })
      );
    }
  }
}
