import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest, map } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(private store: Store<AppState>) {}
 
  get loadingAuth$(): Observable<boolean> {
    return this.store.select('auth').pipe(map(auth => auth.loading));
  }

  get loadingUser$(): Observable<boolean> {
    return this.store.select('user').pipe(map(user => user.loading));
  }

  get loadingCategories$(): Observable<boolean> {
    return this.store.select('categories').pipe(map(categories => categories.loading));
  }

  get loadingPosts$(): Observable<boolean> {
    return this.store.select('posts').pipe(map(posts => posts.loading));
  }

}
