import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  getLoading: Observable<boolean>;
  constructor(
    loadingService: LoaderService
  ) {
    this.getLoading = loadingService.loadingAuth$ || loadingService.loadingCategories$ || loadingService.loadingPosts$ || loadingService.loadingUser$;
  }
}
