import {Tarefa} from '../entities/tarefa';
import {ServerEnum} from '../enums/server.enum';
import {Dia} from '../entities/dia';

export interface TarefasState {
  tarefas: Array<Tarefa>;
  selected: Tarefa;
  serverState: ServerEnum;
  dias: Array<Dia>;
}
