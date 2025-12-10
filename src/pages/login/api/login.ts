import api from '@/lib/axios';
import type { MutationConfig } from '@/lib/query';
import type { LoginFormType } from '@/types/login';
import { useMutation } from '@tanstack/react-query';

const login = async (payload: LoginFormType) => {
  const { data } = await api.post('/api/auth/signin', payload);

  return data;
};

type LoginType = {
  mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = ({ mutationConfig }: LoginType) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: login,
  });
};
