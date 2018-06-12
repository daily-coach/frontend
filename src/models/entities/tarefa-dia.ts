import {Entidade} from './entidade';
export interface TarefaDia extends Entidade {
  tarefasId?: number;
  diasId: number;
}

export const TAREFA_DIA_INITIAL_STATE: TarefaDia = {
  tarefasId: 0,
  diasId: 0
};
