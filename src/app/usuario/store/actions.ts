import {Injectable} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {PayloadAction} from '../../../models/entities/payload-action';
import {Usuario} from '../../../models/entities/usuario';
import {Login, LOGIN_INITAL_STATE} from '../../../models/entities/login';
import {Action} from 'redux';
import {LoginState} from '../../../models/states/login.state';

@Injectable()
export class UsuarioActions {

  public static readonly ADD_USER = '[Usuario] ADD_USER';
  public static readonly LOGIN = '[Usuario] LOGIN';
  public static readonly LOGIN_COMPLETED = '[Usuario] LOGIN_COMPLETED';
  public static readonly LOGIN_ERR = '[Usuario] LOGIN_ERR';

  public addUser = (usuario: Usuario): PayloadAction<Usuario> => ({
    type: UsuarioActions.ADD_USER,
    payload: usuario
  });

  @dispatch()
  public login = (login: Login): PayloadAction<LoginState> => ({
    type: UsuarioActions.LOGIN,
    payload: {
      login: login
    }
  });

  @dispatch()
  public loginCompleted = (): Action => ({
    type: UsuarioActions.LOGIN_COMPLETED
  });

  @dispatch()
  public loginErr = (err: string): PayloadAction<LoginState> => ({
    type: UsuarioActions.LOGIN_ERR,
    payload: {
      login: LOGIN_INITAL_STATE,
      err: err
    }
  });

}
