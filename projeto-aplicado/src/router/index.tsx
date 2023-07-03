import { Suspense, lazy } from 'react';
import { Navigate, Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense>
        <ScrollRestoration />
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '*',
        element: <Navigate to='/home' />,
      },
    ],
  },
]);
