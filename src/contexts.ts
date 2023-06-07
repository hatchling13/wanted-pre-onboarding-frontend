import { createContext } from 'react';

export const AuthContext = createContext({
  isTokenLoaded: false,
  loadToken: (token: string) => {
    token;
    return;
  },
});
