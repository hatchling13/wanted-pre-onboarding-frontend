import { useActionData } from 'react-router-dom';

import { AuthForm } from '../AuthForm';
import type { Result, UserType } from '../../types';
import type { NotFoundError } from '../../errors';

function SignIn() {
  const result = useActionData() as Result<UserType, NotFoundError>;

  const token = result && result.ok ? result.value?.access_token : undefined;
  const error = result && !result.ok ? result.error : undefined;

  return (
    <main aria-label="Sign-in page">
      <AuthForm authType="signin" />
      {error && <span>{error.message}</span>}
      {token && <span>{token}</span>}
    </main>
  );
}

export default SignIn;
