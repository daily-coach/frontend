import {Dia} from '../../../../models/entities/dia';
import {PayloadAction} from '../../../../models/entities/payload-action';
import {TarefasActions} from '../actions';
import {AppActions} from '../../../store/actions';

const INITAL_STATE: Array<Dia> = [];
export const diasReducer = (state = INITAL_STATE, action: PayloadAction<Array<Dia>>): Array<Dia> => {
  switch (action.type) {
    case TarefasActions.LOAD_DIAS:
      return [
        ...state,
        ...action.payload
      ];
    case AppActions.LOGOUT:
      return INITAL_STATE;
  }
  return state;
};
