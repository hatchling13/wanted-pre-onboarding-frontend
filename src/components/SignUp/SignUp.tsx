import { useActionData } from 'react-router-dom';

import { AuthForm } from '../AuthForm';
import type { Result } from '../../types';
import type { BadRequestError } from '../../errors';

function SignUp() {
  const result = useActionData() as Result<undefined, BadRequestError>;

  const error = result && !result.ok ? result.error : undefined;
  const isSuccessful = result?.ok;

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
