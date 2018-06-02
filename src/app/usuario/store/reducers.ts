import {Usuario} from '../../../models/usuario';
import {PayloadAction} from '../../../models/payload-action';
import {UsuarioActions} from './actions';
import {AppActions} from '../../store/actions';

const INITIAL_STATE: Usuario = {
  nome: '',
  email: ''
};

export const usuarioReducer = (state: Usuario = INITIAL_STATE, action: PayloadAction<Usuario>): Usuario => {
  switch (action.type) {
    case UsuarioActions.ADD_USER:
      return action.payload;
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};
