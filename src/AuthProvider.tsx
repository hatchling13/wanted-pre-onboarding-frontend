import { ReactNode, useEffect, useState } from 'react';

import { AuthContext } from './contexts';

interface ProviderType {
  children: ReactNode;
}

const AuthProvider = ({ children }: ProviderType) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('accessToken');

    if (localToken) {
      setToken(localToken);
    }
  });

  const loadToken = (token: string) => {
    setToken(token);
    localStorage.setItem('accessToken', token);
  };

  const isTokenLoaded = token !== undefined && token !== '';

  const value = {
    isTokenLoaded,
    loadToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
