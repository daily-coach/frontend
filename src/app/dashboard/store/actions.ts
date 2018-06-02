import {Injectable} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {PayloadAction} from '../../../models/payload-action';
import {Action} from 'redux';

@Injectable()
export class DashboardActions {
  static readonly START_LOAD = '[Dashboard] START_LOAD';
  static readonly STOP_LOAD = '[Dashboard] STOP_LOAD';
  static readonly ERR_LOAD  = '[Dashboard] ERR_LOAD';

  @dispatch()
  startLoad = (): Action => ({
    type: DashboardActions.START_LOAD
  })

  @dispatch()
  stopLoad = (): Action => ({
    type: DashboardActions.STOP_LOAD
  })

  @dispatch()
  errLoad = (err: Error): PayloadAction<Error> => ({
    type: DashboardActions.ERR_LOAD,
    payload: err
  })
}
