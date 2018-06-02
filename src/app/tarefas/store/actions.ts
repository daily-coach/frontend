import {Injectable} from '@angular/core';
import {Tarefa} from '../../../models/tarefa';
import {dispatch} from '@angular-redux/store';
import {TarefasService} from '../services/service';
import {PayloadAction} from '../../../models/payload-action';
import {Action} from 'redux';

@Injectable()
export class TarefasActions {
  static readonly ADD_TAREFA = '[Tarefas] ADD_TAREFA';
  static readonly LOAD_TAREFAS = '[Tarefas] LOAD_TAREFAS';

  static readonly ADD_TAREFA_SERVER = '[Tarefas] ADD_TAREFA_SERVER';
  static readonly LOAD_TAREFAS_SERVER = '[Tarefas] LOAD_TAREFAS_SERVER';

  constructor(private service: TarefasService) { }

  addTarefa = (payload: Tarefa): PayloadAction<Tarefa> => ({
    type: TarefasActions.ADD_TAREFA,
    payload: payload
  });

  loadTarefas = (payload: Tarefa[]): PayloadAction<Tarefa[]> => ({
    type: TarefasActions.LOAD_TAREFAS,
    payload: payload
  });


  @dispatch()
  addTarefaServer = (payload: Tarefa): PayloadAction<Tarefa>  => ({
    type: TarefasActions.ADD_TAREFA_SERVER,
    payload: payload
  });

  @dispatch()
  loadTarefasServer = (): Action => ({
    type: TarefasActions.LOAD_TAREFAS_SERVER
  });

}
