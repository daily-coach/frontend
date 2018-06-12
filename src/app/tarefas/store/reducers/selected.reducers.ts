import {Tarefa, TAREFA_INITIAL_STATE} from '../../../../models/entities/tarefa';
import {PayloadAction} from '../../../../models/entities/payload-action';
import {AppActions} from '../../../store/actions';

const INITIAL_STATE: Tarefa = TAREFA_INITIAL_STATE;

export const tarefaSelectedReducer = (state = INITIAL_STATE, action: PayloadAction<Tarefa>): Tarefa => {
  switch (action.type) {
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};
