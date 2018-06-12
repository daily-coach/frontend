import {Tarefa} from '../../../../models/entities/tarefa';
import {PayloadAction} from '../../../../models/entities/payload-action';
import {TarefasActions} from '../actions';
import {AppActions} from '../../../store/actions';

const INITAL_STATE: Array<Tarefa> = [];

export const listReducer = (state = INITAL_STATE, action: PayloadAction<any>): Tarefa[] => {
  switch (action.type) {
    case TarefasActions.ADD_TAREFA:
      return [
        ...state,
        action.payload
      ];
    case TarefasActions.LOAD_TAREFAS:
      return action.payload;
    case AppActions.LOGOUT:
      return INITAL_STATE;
  }
  return state;
};
