import Home from '@/pages/home';
import Login from '@/pages/login';

export const routes = [
  {
    name: 'Login',
    title: 'login:page.title',
    description: 'login:page.description',
    path: '/login',
    element: <Login />,
    requiresAuth: false,
    permissions: [],
  },
  {
    name: 'Home',
    title: 'home:page.title',
    description: 'home:page.description',
    path: '/',
    element: <Home />,
    requiresAuth: true,
    permissions: [],
  },

  // Always in last position
  {
    name: 'NotFound',
    title: 'NotFound',
    description: 'Not Found',
    path: '*',
    element: <div>Not Found</div>,
    requiresAuth: false,
  },
] as const;

type RouteName = (typeof routes)[number]['name'];

type RoutesMap = {
  [K in RouteName]: Extract<(typeof routes)[number], { name: K }>['path'];
};

export const routesMap = ((): RoutesMap => {
  return routes.reduce((acc, route) => {
    //@ts-expect-error: Ignoring type error due to dynamic route names
    acc[route.name] = route.path;
    return acc;
  }, {} as RoutesMap);
})();
