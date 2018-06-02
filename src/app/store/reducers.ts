import {combineReducers, Reducer} from 'redux';
import {AppState} from '../../models/app-state';
import {tarefasReducer} from '../tarefas/store/reducers';
import {dashboardReducer} from '../dashboard/store/reducers';
import {usuarioReducer} from '../usuario/store/reducers';
import {appReducer} from './app.reducers';
import {loginReducer} from '../usuario/store/login.reducers';

export const INITIAL_STATE: AppState = {
  app: {
    errors: []
  },
  tarefas: [],
  usuario: {
    nome: '',
    email: ''
  },
  login: {
    email: '',
    senha: '',
    err: ''
  },
  dashboard: {
    loading: false
  }
};

const rootReducer: Reducer<AppState> = combineReducers({
  app: appReducer,
  usuario: usuarioReducer,
  login: loginReducer,
  tarefas: tarefasReducer,
  dashboard: dashboardReducer
} as any);

export default rootReducer;
