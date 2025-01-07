import { RouteProps } from 'react-router-dom';

import {
  AuthPage,
  HomePage,
} from '@/pages';

import { URL_NAME, URL } from '../constants/routes';

type ExtendedRouteProps = RouteProps & {
  useLayout?: boolean;
  private?: boolean
};

export const RouteConfig: Record<URL_NAME, ExtendedRouteProps> = {
  [URL_NAME.HOME]: {
    path: URL.HOME,
    element: <HomePage />,
    private: false,
    useLayout: false,
  },
  [URL_NAME.LOGIN]: {
    path: URL.LOGIN,
    element: <AuthPage />,
    private: false,
    useLayout: false,
  },
};
