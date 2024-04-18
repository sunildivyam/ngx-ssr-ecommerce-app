import { Injectable } from '@angular/core';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppErrorService {
  private $error = new BehaviorSubject<AppError>(null);

  constructor() {}

  public get error(): Observable<AppError> {
    return this.$error.asObservable();
  }

  public set error(v: AppError) {
    this.$error.next(v);
  }
}
