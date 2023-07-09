import { useContext, useEffect } from 'react';
import { useActionData, useNavigate } from 'react-router-dom';

import { AuthForm } from '../AuthForm';
import { AuthContext } from '../../contexts';
import type { Result, UserType } from '../../types';
import type { NotFoundError } from '../../errors';

function SignIn() {
  const result = useActionData() as Result<UserType, Error>;
  const { isTokenLoaded, loadToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (result && result.ok && result.value) {
      loadToken(result.value?.access_token);
    }
  }, [result]);

  useEffect(() => {
    if (isTokenLoaded) {
      navigate('/todo');
    }
  }, [isTokenLoaded]);

  const error = result && !result.ok ? result.error : undefined;

  return (
    <main aria-label="Sign-in page">
      <AuthForm authType="signin" />
      {error && <span>{error.message}</span>}
    </main>
  );
}

export default SignIn;
