import { dispatch } from '.';
import { ApplicationTypes, CurrentAppAction, CurrentAppSubMenuAction } from './types';

export const setCurrentApplication = ({ currentAppLabel, currentAppUrl }: CurrentAppAction): void => {
  dispatch({
    type: ApplicationTypes.SET_CURRENT_APP,
    payload: { currentAppLabel, currentAppUrl },
  });
};

export const setSubMenuItems = ({ subMenu }: CurrentAppSubMenuAction): void => {
  dispatch({
    type: ApplicationTypes.SET_CURRENT_SUBMENU,
    payload: { subMenu },
  });
};
