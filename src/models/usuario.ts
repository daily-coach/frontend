import {Entidade} from './entidade';
export interface Usuario extends Entidade {
  nome: string,
  email: string,
  celular?: string,
  token?: string
}
