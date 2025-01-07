import { RouteProps } from 'react-router-dom';

import {
  AuthPage,
  HomePage,
} from '@/pages';

import { ROUTE_NAME, ROUTE_URL } from '../constants/routes';

type ExtendedRouteProps = RouteProps & {
  useLayout?: boolean;
  private?: boolean
};

export const RouteConfig: Record<ROUTE_NAME, ExtendedRouteProps> = {
  [ROUTE_NAME.HOME]: {
    path: ROUTE_URL.HOME,
    element: <HomePage />,
    private: false,
    useLayout: true,
  },
  [ROUTE_NAME.LOGIN]: {
    path: ROUTE_URL.LOGIN,
    element: <AuthPage />,
    private: false,
    useLayout: false,
  },
};
