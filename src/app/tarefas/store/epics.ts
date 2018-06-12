import {Injectable} from '@angular/core';
import {TarefasService} from '../services/service';
import {TarefasActions} from './actions';
import {createEpicMiddleware} from 'redux-observable';
import {Middleware} from 'redux';
import {DashboardActions} from '../../dashboard/store/actions';
import {errorHandler} from '../../../utilities/error-handler';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';
import {Tarefa} from '../../../models/entities/tarefa';
import {UsuarioGlobalServices} from '../../services/usuario.global.services';
import {ServerEnum} from '../../../models/enums/server.enum';

@Injectable()
export class TarefasEpics {
  constructor(private service: TarefasService,
              private actions: TarefasActions,
              private dashboard: DashboardActions,
              private usuarioGlobal: UsuarioGlobalServices) { }

  public createEpic(): Array<Middleware> {
    return [
      createEpicMiddleware(this.addTarefasEpic),
      createEpicMiddleware(this.loadTarefasEpic),
      createEpicMiddleware(this.loadDiasEpic)
    ];
  }

  addTarefasEpic = (action$, store) => action$
    .ofType(TarefasActions.ADD_TAREFA_SERVER)
    .mergeMap(action => {
      this.actions.changeServerState(ServerEnum.REQUESTING);
      return this.service.save(action.payload, true)
    })
    .map(response => {
      this.actions.changeServerState(ServerEnum.COMPLETED);
      return this.actions.addTarefa(response)
    })
    .catch(err => {
      errorHandler(err);
      this.actions.changeServerState(ServerEnum.ERROR);
      return Observable.throw(err);
    })
    .retry();

  loadTarefasEpic = (action$, store) => action$
    .ofType(TarefasActions.LOAD_TAREFAS_SERVER)
    .mergeMap(_ => {
      this.dashboard.startLoad();
      return this.service.getAll(true, {user_id: this.usuarioGlobal.usuario.id})
    })
    .map(res => {
      this.dashboard.stopLoad();
      return this.actions.loadTarefas(res)
    })
    .catch(err => {
      this.dashboard.stopLoad();
      this.dashboard.errLoad(err);
      errorHandler(err);
      return Observable.throw(err);
    })
    .retry();

  loadDiasEpic = (action$, store) => action$
    .ofType(TarefasActions.LOAD_DIAS_SERVER)
    .mergeMap(_ => this.service.getDias())
    .map(res => this.actions.loadDias(res))
    .catch(err => {
      errorHandler(err);
      return Observable.throw(err);
    })
    .retry();
}
