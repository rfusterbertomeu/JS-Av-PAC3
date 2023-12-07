import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  loading_auth$: Observable<boolean>;
  loading_user$: Observable<boolean>;
  loading_categories$: Observable<boolean>;
  loading_posts$: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) {
    this.loading_auth$ = this.store.select('auth').pipe(map(auth => auth.loading));
    this.loading_user$ = this.store.select('user').pipe(map(user => user.loading));
    this.loading_categories$ = this.store.select('categories').pipe(map(categories => categories.loading));
    this.loading_posts$ = this.store.select('posts').pipe(map(posts => posts.loading));

  }
}

