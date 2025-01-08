export enum ROUTE_NAME {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  RESULTS = 'RESULTS',
  DOCUMENTATION = 'DOCUMENTATION',
  SETTINGS = 'SETTINGS'
}

export const ROUTE_URL: Record<ROUTE_NAME, string> = {
  [ROUTE_NAME.HOME]: '/',
  [ROUTE_NAME.LOGIN]: '/login',
  [ROUTE_NAME.RESULTS]: '/results',
  [ROUTE_NAME.DOCUMENTATION]: '/documentation',
  [ROUTE_NAME.SETTINGS]: '/settings'
};
