import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common from './ja/common.json';
import login from './ja/login.json';

const resources = {
  ja: {
    common,
    login,
  },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'ja',
    resources,
    returnNull: false,
  });
