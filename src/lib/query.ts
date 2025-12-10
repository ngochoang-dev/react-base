/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationCache, QueryCache, QueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { HttpStatusCode, isAxiosError } from 'axios';
import { routesMap } from '@/router/routes';
import { logoutStorage } from './local-store';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      if (isAxiosError(error)) {
        if (error.code === 'ERR_NETWORK') {
          // TODO: Handle network error
        }

        if (error.status === HttpStatusCode.Unauthorized) {
          logoutStorage();
          window.location.href = routesMap.Login;
        }

        if (error.status === HttpStatusCode.Forbidden) {
          // TODO: Handle forbidden error
        }
      }
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: () => {
      // TODO: Handle success
    },
    onError: error => {
      if (isAxiosError(error)) {
        if (error.status === HttpStatusCode.Forbidden) {
          // TODO: Handle forbidden error
        } else {
          // TODO: Handle error
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default queryClient;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<ReturnType<FnType>>;
export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>;

export type ApiResponseType<T> = {
  data: T;
}; // TODO: Define ApiResponseType here

export type MutationConfig<MutationFnType extends (...args: any) => Promise<any>> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
