import { createContext } from 'react';

export const AuthContext = createContext({
  token: '',
  loadToken: (token: string) => {
    token;
    return;
  },
});
