import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(
    private store: Store<AppState>
  ) {}

  loading_auth$ = this.store.select('auth').subscribe((auth) => {
    auth.loading
   });
 
   loading_user$ = this.store.select('user').subscribe((user) => {
     user.loading
    });
 
   loading_categories$ = this.store.select('categories').subscribe((categories) => {
     categories.loading;
   });
 
   loading_posts$ = this.store.select('posts').subscribe((posts) => {
     posts.loading;
   });
}

