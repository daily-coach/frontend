import {TarefaDia} from './tarefa-dia';
export interface Tarefa {
  titulo: string;
  descricao: string;
  tarefaDias: Array<TarefaDia>;
  usuariosId: number;
}

export const TAREFA_INITIAL_STATE: Tarefa = {
  titulo: '',
  descricao: '',
  tarefaDias: [],
  usuariosId: 0
};
