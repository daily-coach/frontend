import {Injectable} from '@angular/core';
import {PayloadAction} from '../../models/payload-action';
import {dispatch} from '@angular-redux/store';
import {Action} from 'redux';

@Injectable()
export class AppActions {

  public static readonly HTTP_ERROR = '[App] HTTP_ERROR';
  public static readonly LOGOUT = '[App] LOGOUT';

  @dispatch()
  httpError = (errMessage: string): PayloadAction<string> => ({
    type: AppActions.HTTP_ERROR,
    payload: errMessage
  });

  @dispatch()
  logout = (): Action => ({
    type: AppActions.LOGOUT
  })
}
