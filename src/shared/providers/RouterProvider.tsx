import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/containers';
import { RouteConfig } from '../config/RouteConfig';
import { PrivateRoute } from '../config/PrivateRoute';
import { HomePage } from '@/pages';

export const RouterProvider = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(
        ({ element, path, private: isPrivate, useLayout }) =>
          isPrivate ? (
            <Route key={path} path={path} element={<PrivateRoute />}>
              <Route
                index
                element={useLayout ? <Layout>{element}</Layout> : element}
              />
            </Route>
          ) : (
            <Route
              key={path}
              path={path}
              element={useLayout ? <Layout>{element}</Layout> : element}
            />
          )
      )}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
