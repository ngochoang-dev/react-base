import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import ProtectedRoute from './router/protected-route';
import { Suspense } from 'react';

const router = createBrowserRouter(
  routes.map(route => ({
    ...route,
    element: <ProtectedRoute {...route}>{route.element}</ProtectedRoute>,
  }))
);

const App = () => {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
