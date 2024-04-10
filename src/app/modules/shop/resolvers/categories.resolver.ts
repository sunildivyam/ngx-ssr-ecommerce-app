import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { APP_STATE_KEYS, AppStateService } from '../../app-core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { Observable } from 'rxjs';

export const categoriesResolver: ResolveFn<Array<Category>> = (
  route,
  state
) => {
  const appStateService = inject(AppStateService);

  return new Observable<Array<Category>>((observer) => {
    appStateService.appState.subscribe((state) => {
      const liveCategories: Array<Category> =
        state[APP_STATE_KEYS.liveCategories] || [];

      if (route.params && liveCategories?.length) {
        const params = Object.keys(route.params).map(
          (key) => route.params[key]
        );
        const cats = params.map(
          (p) => liveCategories.find((cat) => cat.id === p) || null
        );

        // Check if all params are valid categroies
        let invalid = cats.includes(null);

        if (invalid) {
          observer.next([]);
        } else {
          // Check if nested tree has valid categories relation
          for (let i = 0; i < cats.length - 2; i++) {
            invalid = !cats[i + 1].parents?.includes(cats[i].id);
            if (invalid) break;
          }

          invalid ? observer.next([]) : observer.next(cats);
        }

        observer.next(cats);
      } else {
        observer.next([]);
      }
    });
  });
};
