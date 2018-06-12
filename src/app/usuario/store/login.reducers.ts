import {Login, LOGIN_INITAL_STATE} from '../../../models/entities/login';
import {PayloadAction} from '../../../models/entities/payload-action';
import {UsuarioActions} from './actions';
import {AppActions} from '../../store/actions';
import {LoginState} from '../../../models/states/login.state';

const INITIAL_STATE: LoginState = {
  login: LOGIN_INITAL_STATE,
  err: ''
};

export const loginReducer = (state = INITIAL_STATE, action: PayloadAction<LoginState>): LoginState => {
  switch (action.type) {
    case UsuarioActions.LOGIN_ERR:
      return action.payload;
    case UsuarioActions.LOGIN_COMPLETED:
      return Object.assign({}, {
        login: {email: '', senha: ''},
        err: ''
      });
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};
