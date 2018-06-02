import {Injectable} from '@angular/core';
import {UsuarioServices} from '../services/usuario.services';
import {Middleware} from 'redux';
import {UsuarioActions} from './actions';
import {UsuarioGlobalServices} from '../../services/usuario.global.services';
import {createEpicMiddleware} from 'redux-observable';
import {AppActions} from '../../store/actions';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';
import {Login} from '../../../models/login';
import {ResponseUtil} from '../../../models/response';

@Injectable()
export class UsuarioEpics {

  constructor(private service: UsuarioServices,
              private actions: UsuarioActions,
              private app: AppActions,
              private usuarioGlobal: UsuarioGlobalServices,
              private router: Router) { }

  public createEpic = (): Array<Middleware> => [
    createEpicMiddleware(this.loginEpic)
  ];

  loginEpic = (action$, store) => action$
    .ofType(UsuarioActions.LOGIN)
    .switchMap(action => this.service.login(action.payload))
    .map(response => {
      this.usuarioGlobal.save(response).then(_ => {
        this.router.navigate(['/home']);
      });
      this.actions.loginCompleted();
      return this.actions.addUser(response);
    })
    .catch(err => {
      const erro: ResponseUtil<Login> = err.error;
      this.app.httpError(erro.description);

      if (erro.status === 401) {
        this.actions.loginErr('Login ou senha incorretos');
      } else {
        this.actions.loginErr(erro.description);
      }
      return Observable.throw(err);
    })
    .retry();
}
