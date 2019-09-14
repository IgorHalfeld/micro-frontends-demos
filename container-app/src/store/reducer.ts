import { Reducer } from 'react-hooks-global-state';
import {
 ApplicationTypes,
 CurrentAppAction,
 CurrentAppSubMenuAction,
 ApplicationState,
} from './types';


type Action =
  | { type: ApplicationTypes.SET_CURRENT_APP, payload: CurrentAppAction }
  | { type: ApplicationTypes.SET_CURRENT_SUBMENU, payload: CurrentAppSubMenuAction }

export const INITIAL_STATE: ApplicationState = {
  hasCurrentAppActive: false,
  currentAppLabel: 'Ecommerce',
  currentAppUrl: '',
  subMenu: [],
};

const reducer: Reducer<ApplicationState, Action> = (state = INITIAL_STATE, action): ApplicationState => {
  switch (action.type) {
    case ApplicationTypes.SET_CURRENT_APP:
      return {
        ...state,
        hasCurrentAppActive: true,
        currentAppLabel: action.payload.currentAppLabel,
        currentAppUrl: action.payload.currentAppUrl,
      };
    case ApplicationTypes.SET_CURRENT_SUBMENU:
      return {
        ...state,
        subMenu: action.payload.subMenu,
      };
    default:
      return state;
  }
};

export default reducer;
