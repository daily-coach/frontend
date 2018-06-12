import {ServerEnum} from '../../../../models/enums/server.enum';
import {AppActions} from '../../../store/actions';
import {Action} from 'redux';
import {TarefasActions} from '../actions';
import {PayloadAction} from '../../../../models/entities/payload-action';

const INITAL_STATE: ServerEnum = ServerEnum.WAITING;

export const serverStateReducer = (state = INITAL_STATE, action: PayloadAction<ServerEnum>): ServerEnum => {
  switch (action.type) {
    case TarefasActions.TAREFA_SERVER_STATE:
      return action.payload;
    case AppActions.LOGOUT:
      return INITAL_STATE;
  }
  return state;
};
