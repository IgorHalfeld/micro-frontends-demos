export enum ApplicationTypes {
  SET_CURRENT_APP = 'SET_CURRENT_APP',
  SET_CURRENT_SUBMENU = 'SET_CURRENT_SUBMENU',
}

interface SubMenuItem {
  label: string,
  route: string,
}
export interface ApplicationState {
  hasCurrentAppActive: boolean,
  currentAppLabel: string,
  currentAppUrl: string,
  subMenu: SubMenuItem[],
}

export interface CurrentAppAction {
  currentAppLabel: string,
  currentAppUrl: string,
}
export interface CurrentAppSubMenuAction {
  subMenu: SubMenuItem[]
}
