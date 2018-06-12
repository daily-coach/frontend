import {Entidade} from './entidade';
export interface Usuario extends Entidade {
  nome: string,
  email: string,
  celular?: string,
  token?: string
}

export const USUARIO_INITAL_STATE: Usuario = {
  nome: '',
  email: ''
};
