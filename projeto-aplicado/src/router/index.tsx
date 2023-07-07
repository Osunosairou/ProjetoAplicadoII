import { Suspense, lazy } from 'react';
import { Navigate, Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const CadastroCurriculo = lazy(() => import('../pages/CadastroCurriculo'));
const LoginFuncionarios = lazy(() => import('../pages/LoginFuncionarios'));
const CadastroVaga = lazy(() => import('../pages/CadastroVaga'));
const Curriculos = lazy(() => import('../pages/Curriculos'));

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
        path: '/cadastro-curriculo',
        element: <CadastroCurriculo />,
      },
      {
        path: '/cadastro-vaga',
        element: <CadastroVaga />,
      },
      {
        path: '/curriculos',
        element: <Curriculos />,
      },
      {
        path: '/curriculo',
        element: <Navigate to='/curriculos' />,
      },
      {
        path: '/login',
        element: <LoginFuncionarios />,
      },
      {
        path: '*',
        element: <Navigate to='/home' />,
      },
    ],
  },
]);
