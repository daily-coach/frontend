import {Dashboard} from '../../../models/dashboard';
import {PayloadAction} from '../../../models/payload-action';
import {DashboardActions} from './actions';
import {AppActions} from '../../store/actions';
const INITIAL_STATE: Dashboard = {
  loading: false
};

export const dashboardReducer = (state: Dashboard = INITIAL_STATE, action: PayloadAction<Dashboard>): Dashboard => {
  switch (action.type) {
    case DashboardActions.START_LOAD:
      return Object.assign(state, { loading: true });
    case DashboardActions.STOP_LOAD:
      return Object.assign(state, { loading: false });
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};

