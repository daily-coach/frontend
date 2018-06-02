import {Login} from '../../../models/login';
import {PayloadAction} from '../../../models/payload-action';
import {UsuarioActions} from './actions';
import {AppActions} from '../../store/actions';

const INITIAL_STATE: Login = {
  email: '',
  senha: ''
};

export const loginReducer = (state = INITIAL_STATE, action: PayloadAction<Login>): Login => {
  switch (action.type) {
    case UsuarioActions.LOGIN_ERR:
      return action.payload;
    case UsuarioActions.LOGIN_COMPLETED:
      return Object.assign({}, {email: '', senha: ''});
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};
