import {Injectable} from '@angular/core';
import {PayloadAction} from '../../models/entities/payload-action';
import {dispatch} from '@angular-redux/store';
import {Action} from 'redux';

@Injectable()
export class AppActions {

  public static readonly HTTP_ERROR = '[DebugState] HTTP_ERROR';
  public static readonly LOGOUT = '[DebugState] LOGOUT';

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
