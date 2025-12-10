import api from '@/lib/axios';
import { basicInfo } from '@/lib/local-store';
import type { QueryConfig } from '@/lib/query';
import { queryOptions, useQuery } from '@tanstack/react-query';

const getMe = async () => {
  const { data } = await api.get('/api/auth/me');
  return data;
};

export const USER_QUERY_KEY = 'get-me';

export const getMeOptions = () =>
  queryOptions({
    queryKey: [USER_QUERY_KEY],
    queryFn: getMe,
  });

type UseGetMeType = {
  queryConfig?: QueryConfig<typeof getMeOptions>;
};

export const useGetMe = ({ queryConfig }: UseGetMeType) => {
  const userInfo = basicInfo().get();
  const query = useQuery({
    ...getMeOptions(),
    ...queryConfig,
    retry: 0,
    staleTime: 5 * 60 * 1000,
    initialData: {
      data: userInfo,
    },
    initialDataUpdatedAt: 0,
  });

  return query;
};
