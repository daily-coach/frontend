import {Entidade} from './entidade';
export interface Dia extends Entidade {
  nome: string;
  showNome: string;
}

export const DIA_INITIAL_STATE: Dia = {
  nome: '',
  showNome: ''
};
