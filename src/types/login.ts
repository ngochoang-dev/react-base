import * as yup from 'yup';
import i18n from 'i18next';

export const loginFormSchema = () => {
  return yup.object({
    username: yup
      .string()
      .trim()
      .required(i18n.t('login:forms.username.required'))
      .max(255, i18n.t('login:forms.username.maxLength')),
    password: yup
      .string()
      .required(i18n.t('login:forms.password.required'))
      .min(8, i18n.t('login:forms.password.minLength')),
  });
};

export type LoginFormType = yup.InferType<ReturnType<typeof loginFormSchema>>;
