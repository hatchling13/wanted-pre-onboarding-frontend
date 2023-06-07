import { useState } from 'react';
import { Form } from 'react-router-dom';

import type { AuthFormType } from '../../types';

function AuthForm({ authType }: AuthFormType) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formLabel = authType === 'signin' ? 'Sign-in' : 'Sign-up';

  const isValid = email.includes('@') && password.length >= 8;

  return (
    <Form method="post" aria-label={`${formLabel} form`}>
      <label htmlFor="email">
        이메일:{' '}
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        비밀번호:{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          data-testid="password-input"
        />
      </label>
      <button
        type="submit"
        data-testid={`${authType}-button`}
        disabled={!isValid}
      >
        로그인
      </button>
    </Form>
  );
}

export default AuthForm;
