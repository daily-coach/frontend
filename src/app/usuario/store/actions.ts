import {Injectable} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {PayloadAction} from '../../../models/payload-action';
import {Usuario} from '../../../models/usuario';
import {Login} from '../../../models/login';
import {Action} from 'redux';

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
  public login = (login: Login): PayloadAction<Login> => ({
    type: UsuarioActions.LOGIN,
    payload: login
  });

  @dispatch()
  public loginCompleted = (): Action => ({
    type: UsuarioActions.LOGIN_COMPLETED
  });

  @dispatch()
  public loginErr = (err: string): PayloadAction<Login> => ({
    type: UsuarioActions.LOGIN_ERR,
    payload: {
      email: '',
      senha: '',
      err: err
    }
  })

}
