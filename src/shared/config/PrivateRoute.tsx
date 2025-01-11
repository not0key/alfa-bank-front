import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_URL } from '../constants/routes';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '@/store';

export const PrivateRoute = () => {
  const isAuthorized = useAppSelector(
    (state: RootState) => state.auth.isAuthorized
  );

  return isAuthorized ? <Outlet /> : <Navigate to={ROUTE_URL.LOGIN} replace />;
};

