import {DebugState} from '../../models/states/debug.state';
import {PayloadAction} from '../../models/entities/payload-action';
import {AppActions} from './actions';

const INITIAL_STATE: DebugState = {
  errors: []
};

export const debugReducer = (state: DebugState = INITIAL_STATE, action: PayloadAction<string>) => {
  switch (action.type) {
    case AppActions.HTTP_ERROR:
      return {
        errors: [...state.errors, action.payload]
      };
    case AppActions.LOGOUT:
      return INITIAL_STATE;
  }
  return state;
};
