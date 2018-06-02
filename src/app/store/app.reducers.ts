import {App} from '../../models/app';
import {PayloadAction} from '../../models/payload-action';
import {AppActions} from './actions';

const INITIAL_STATE: App = {
  errors: []
};

export const appReducer = (state: App = INITIAL_STATE, action: PayloadAction<string>) => {
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
