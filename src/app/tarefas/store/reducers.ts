import {Tarefa} from '../../../models/tarefa';
import {TarefasActions} from './actions';
import {PayloadAction} from '../../../models/payload-action';
import {AppActions} from '../../store/actions';

const INITIAL_STATE: Array<Tarefa> = [];

export function tarefasReducer (state: Array<Tarefa> = INITIAL_STATE, action: PayloadAction<Tarefa>): Array<Tarefa> {
  switch (action.type) {
    case TarefasActions.ADD_TAREFA: {
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
    }
    case TarefasActions.LOAD_TAREFAS:
      return action.payload as any
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
}
