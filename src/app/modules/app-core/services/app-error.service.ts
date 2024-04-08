import { Injectable } from '@angular/core';
import { AppError } from '@annuadvent/ngx-common-ui/error';
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
    this.$error.next(this.parseError(v));
  }

  private parseError(error: any) {
    if (!error) return null;

    return {
      code: error.code || error.error?.code || error?.status || '',
      message:
        (typeof error === 'string' ? error : '') ||
        (typeof error?.error === 'string' ? error?.error : '') +
          ' ' +
          error.message ||
        error.error?.message ||
        error.stack?.toString() ||
        ''
    } as AppError;
  }
}
