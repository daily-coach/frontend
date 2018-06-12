import {Injectable} from '@angular/core';
import {Tarefa} from '../../../models/entities/tarefa';
import {dispatch} from '@angular-redux/store';
import {TarefasService} from '../services/service';
import {PayloadAction} from '../../../models/entities/payload-action';
import {Action} from 'redux';
import {Dia} from '../../../models/entities/dia';
import {ServerEnum} from '../../../models/enums/server.enum';

@Injectable()
export class TarefasActions {
  static readonly ADD_TAREFA = '[Tarefas] ADD_TAREFA';
  static readonly LOAD_TAREFAS = '[Tarefas] LOAD_TAREFAS';
  static readonly LOAD_DIAS = '[Tarefas] LOAD_DIAS';

  static readonly ADD_TAREFA_SERVER = '[Tarefas] ADD_TAREFA_SERVER';
  static readonly LOAD_TAREFAS_SERVER = '[Tarefas] LOAD_TAREFAS_SERVER';
  static readonly LOAD_DIAS_SERVER = '[Tarefas] LOAD_DIAS_SERVER';

  static readonly TAREFA_SERVER_STATE = '[Tarefas] SERVER_STATE';

  constructor(private service: TarefasService) { }

  addTarefa = (payload: Tarefa): PayloadAction<Tarefa> => ({
    type: TarefasActions.ADD_TAREFA,
    payload: payload
  });

  loadTarefas = (payload: Tarefa[]): PayloadAction<Tarefa[]> => ({
    type: TarefasActions.LOAD_TAREFAS,
    payload: payload
  });

  loadDias = (payload: Dia[]): PayloadAction<Dia[]> => ({
    type: TarefasActions.LOAD_DIAS,
    payload: payload
  });

  @dispatch()
  changeServerState = (state: ServerEnum): PayloadAction<ServerEnum> => ({
    type: TarefasActions.TAREFA_SERVER_STATE,
    payload: state
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

  @dispatch()
  addDiasServer = (): Action =>({
    type: TarefasActions.LOAD_DIAS_SERVER
  });
}
