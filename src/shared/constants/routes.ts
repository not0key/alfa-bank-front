export enum ROUTE_NAME {
  HOME = 'HOME',
  LOGIN = 'LOGIN'
}

export const ROUTE_URL: Record<ROUTE_NAME, string> = {
  [ROUTE_NAME.HOME]: '/',
  [ROUTE_NAME.LOGIN]: '/login'
};
