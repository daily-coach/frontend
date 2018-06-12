import {combineReducers} from 'redux';
import {serverStateReducer} from './reducers/server-state.reducers';
import {listReducer} from './reducers/list.reducers';
import {tarefaSelectedReducer} from './reducers/selected.reducers';
import {diasReducer} from './reducers/dias.reducers';

export const tarefasStateReducer = combineReducers({
  serverState: serverStateReducer,
  selected: tarefaSelectedReducer,
  tarefas: listReducer,
  dias: diasReducer
} as any);
