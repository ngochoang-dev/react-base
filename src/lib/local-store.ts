const ACCESS_TOKEN_KEY = 'accessToken';
export const accessToken = () => {
  return {
    get() {
      return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    set(token: string) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    remove() {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  };
};

const BASIC_INFO = 'basic_info';
export const basicInfo = () => {
  return {
    get() {
      return JSON.parse(localStorage.getItem(BASIC_INFO) || '{}');
    },
    set(data: any) {
      localStorage.setItem(BASIC_INFO, JSON.stringify(data));
    },
    remove() {
      localStorage.removeItem(BASIC_INFO);
    },
  };
};

const LANGUAGE_KEY = 'language';
export const language = () => {
  return {
    get() {
      return localStorage.getItem(LANGUAGE_KEY) || 'vi';
    },
    set(lang: string) {
      localStorage.setItem(LANGUAGE_KEY, lang);
    },
    remove() {
      localStorage.removeItem(LANGUAGE_KEY);
    },
  };
};

export const logoutStorage = () => {
  accessToken().remove();
  basicInfo().remove();
  // TODO: Xóa query cache cần thiết
  // queryClient.removeQueries({
  //   queryKey: [USER_QUERY_KEY],
  // });
};
