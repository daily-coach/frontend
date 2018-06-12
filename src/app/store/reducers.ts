import {combineReducers, Reducer} from 'redux';
import {AppState} from '../../models/states/app.state';
import {tarefasStateReducer} from '../tarefas/store/reducers';
import {dashboardReducer} from '../dashboard/store/reducers';
import {usuarioReducer} from '../usuario/store/reducers';
import {debugReducer} from './app.reducers';
import {loginReducer} from '../usuario/store/login.reducers';
import {TAREFA_INITIAL_STATE} from '../../models/entities/tarefa';
import {ServerEnum} from '../../models/enums/server.enum';
import {LOGIN_INITAL_STATE} from '../../models/entities/login';

export const INITIAL_STATE: AppState = {
  app: {
    errors: []
  },
  tarefas: {
    tarefas: [],
    selected: TAREFA_INITIAL_STATE,
    serverState: ServerEnum.WAITING,
    dias: []
  },
  usuario: {
    nome: '',
    email: ''
  },
  login: {
    login: LOGIN_INITAL_STATE,
    err: ''
  },
  dashboard: {
    loading: false
  }
};

const rootReducer: Reducer<AppState> = combineReducers({
  app: debugReducer,
  usuario: usuarioReducer,
  login: loginReducer,
  tarefas: tarefasStateReducer,
  dashboard: dashboardReducer
} as any);

export default rootReducer;
