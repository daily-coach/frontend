import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';

export const mapToResponse = (func: Function, err?: any): Observable<any> =>
  func()
    .pipe(
      map((res: any) => {
        if (res.status === 200) {
          return res.response;
        }
        return {};
      })
    );
