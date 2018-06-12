import {Login} from '../entities/login';
export interface LoginState {
  login: Login,
  err?: string
}
