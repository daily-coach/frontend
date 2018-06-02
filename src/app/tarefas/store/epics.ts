import {Injectable} from '@angular/core';
import {TarefasService} from '../services/service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import {TarefasActions} from './actions';
import {createEpicMiddleware} from 'redux-observable';
import {Middleware} from 'redux';
import {DashboardActions} from '../../dashboard/store/actions';

@Injectable()
export class TarefasEpics {
  constructor(private service: TarefasService, private actions: TarefasActions, private dashboard: DashboardActions) { }

  public createEpic(): Array<Middleware> {
    return [
      createEpicMiddleware(this.addTarefasEpic),
      createEpicMiddleware(this.loadTarefasEpic)
    ];
  }

  addTarefasEpic = (action$, store) => action$
    .ofType(TarefasActions.ADD_TAREFA_SERVER)
    .mergeMap(action => this.service.save(action.payload))
    .map(response => {
      return this.actions.addTarefa(response);
    });

  loadTarefasEpic = (action$, store) => action$
    .ofType(TarefasActions.LOAD_TAREFAS_SERVER)
    .mergeMap(_ => {
      this.dashboard.startLoad();
      return this.service.getAll(true)
    })
    .map(res => {
      this.dashboard.stopLoad();
      return this.actions.loadTarefas(res)
    })
    .catch(err => {
      this.dashboard.stopLoad();
      this.dashboard.errLoad(err)
    });
}
