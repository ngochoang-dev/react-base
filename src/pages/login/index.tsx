import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { loginFormSchema, type LoginFormType } from '@/types/login';
import { useLogin } from './api/login';
import useBlocker from '@/hooks/use-blocker';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  const { t } = useTranslation('login');
  const { t: tCommon } = useTranslation('common');
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin({
    mutationConfig: {
      onSuccess: () => {
        navigate('/');
      },
    },
  });

  const form = useForm<LoginFormType>({
    resolver: yupResolver(loginFormSchema()),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const {
    formState: { isDirty },
  } = form;

  const onSubmit = (data: LoginFormType) => {
    login(data);
  };

  // Block navigation when form has unsaved changes
  useBlocker(isDirty, tCommon('forms.leaveWarning'));

  return (
    <div className="container mx-auto max-w-md py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('forms.username.label')}</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={t('forms.username.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('forms.password.label')}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder={t('forms.password.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? tCommon('buttons.loading') : t('buttons.login')}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
