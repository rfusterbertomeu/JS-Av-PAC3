import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { createTodo } from '../../actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  titleInput: UntypedFormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new UntypedFormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodoTask() {
    if (this.titleInput.valid) {
      this.store.dispatch(createTodo({ title: this.titleInput.value }));
      this.titleInput.reset();
    }
  }
}
