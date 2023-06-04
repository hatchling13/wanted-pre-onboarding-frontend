import {
  BadRequestError,
  HTTPFailedError,
  NotFoundError,
  ParseError,
} from './errors';
import type {
  AuthType,
  Failed,
  FailedResponseBody,
  Result,
  Success,
} from './types';

export const succeeded = <T>(value: T | undefined): Success<T> => {
  if (!value) {
    return {
      ok: true,
      value: undefined,
    };
  }
  return {
    ok: true,
    value,
  };
};

export const failed = <E>(error: E): Failed<E> => {
  return {
    ok: false,
    error,
  };
};

export const authFormDataParse = async (
  request: Request
): Promise<Result<AuthType, ParseError>> => {
  const formData = await request.formData();

  const emailValue = formData.get('email');
  const passwordValue = formData.get('password');

  if (!emailValue || !passwordValue) {
    return Promise.reject(
      failed(new ParseError('이메일 또는 비밀번호가 입력되지 않았습니다'))
    );
  }

  return Promise.resolve(
    succeeded({
      email: emailValue.toString(),
      password: passwordValue.toString(),
    })
  );
};

export const parseResponseBody = <T>(body: NonNullable<unknown>) => {
  if (Object.prototype.hasOwnProperty.call(body, 'error')) {
    const failedBody = body as FailedResponseBody;

    const parsedError = parseHTTPFailedError(failedBody);

    return failed(parsedError);
  }

  return succeeded(body as T);
};

export const parseHTTPFailedError = (error: FailedResponseBody) => {
  switch (error.statusCode) {
    case 400:
      return new BadRequestError(error.message, error.error);
    case 404:
      return new NotFoundError(error.message, error.error);
    default:
      return new HTTPFailedError(error.error, error.statusCode);
  }
};
