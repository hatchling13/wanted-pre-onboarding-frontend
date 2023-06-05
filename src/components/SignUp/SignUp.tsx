import { useContext, useEffect } from 'react';
import { useActionData, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts';
import { AuthForm } from '../AuthForm';
import type { Result } from '../../types';
import type { BadRequestError } from '../../errors';

function SignUp() {
  const result = useActionData() as Result<undefined, BadRequestError>;
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const error = result && !result.ok ? result.error : undefined;
  const isSuccessful = result?.ok;

  useEffect(() => {
    if (isSuccessful) {
      navigate('/todo');
    }
  }, [isSuccessful]);

  useEffect(() => {
    if (token !== '') {
      navigate('/todo');
    }
  }, [token]);

  return (
    <main aria-label="Sign-up page">
      <AuthForm authType="signup" />
      <div>
        {error?.errorMessages.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </div>
      {isSuccessful && <span>Successfully signed up!</span>}
    </main>
  );
}

export default SignUp;
