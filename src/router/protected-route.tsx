import { routes, routesMap } from '@/router/routes';
import { Navigate, ScrollRestoration, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { accessToken, basicInfo } from '@/lib/local-store';
import { useGetMe } from '@/pages/user/api/get-me';

type Props = {
  children: React.ReactNode;
} & (typeof routes)[number];

const ProtectedRoute = ({ children, title, description, ...props }: Props) => {
  const { t } = useTranslation();
  const isAuthenticated = accessToken().get();
  const location = useLocation();

  const isAllowQueryUser = !(location.pathname === routesMap.Login);

  const { data, isFetched } = useGetMe({
    queryConfig: {
      enabled: isAllowQueryUser,
    },
  });

  const user = data?.data;

  useEffect(() => {
    if (isFetched && user) {
      basicInfo().set(user);
    }
  }, [user, isFetched]);

  if (isAuthenticated) {
    if (!props.requiresAuth && location.pathname === routesMap.Login) {
      return <Navigate to={routesMap.Home} replace />;
    }
  } else {
    if (props.requiresAuth) {
      return <Navigate to={routesMap.Login} replace />;
    }
  }

  return (
    <>
      <ScrollRestoration />
      <Helmet key={location.pathname}>
        <title>Base - {t(title)}</title>
        <meta name="description" content={t(description)} />
      </Helmet>
      {children}
    </>
  );
};

export default ProtectedRoute;
