import {Tarefa} from './tarefa';
import {Dashboard} from './dashboard';
import {Usuario} from './usuario';
import {App} from './app';
import {Login} from './login';

export interface AppState {
  app: App,
  usuario: Usuario,
  login: Login,
  tarefas: Array<Tarefa>;
  dashboard: Dashboard;
}
