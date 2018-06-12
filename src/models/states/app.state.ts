import {Dashboard} from './dashboard.state';
import {Usuario} from '../entities/usuario';
import {DebugState} from './debug.state';
import {TarefasState} from './tarefa.state';
import {LoginState} from './login.state';

export interface AppState {
  app: DebugState,
  usuario: Usuario,
  login: LoginState,
  tarefas: TarefasState;
  dashboard: Dashboard;
}
