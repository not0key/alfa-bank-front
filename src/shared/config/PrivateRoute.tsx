// import { Navigate, Outlet } from 'react-router-dom';
// import { URL } from '../constants/routes';

// export const PrivateRoute = () => {
//   const isAuthorized = useAppSelector(
//     (state: RootState) => state.auth.isAuthorized
//   );

//   return isAuthorized ? <Outlet /> : <Navigate to={URL.LOGIN} replace />;
// };

import { Outlet } from 'react-router-dom';
// import { URL } from '../constants/routes';

export const PrivateRoute = () => {
  // const isAuthorized = useAppSelector(
  //   (state: RootState) => state.auth.isAuthorized
  // );

  return  <Outlet />;
};
