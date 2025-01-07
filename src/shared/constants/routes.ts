export enum URL_NAME {
  HOME = 'HOME',
  LOGIN = 'LOGIN'
}

export const URL: Record<URL_NAME, string> = {
  [URL_NAME.HOME]: '/',
  [URL_NAME.LOGIN]: '/login'
};
