export interface Success<T> {
  ok: true;
  value: T | undefined;
}

export interface Failed<E> {
  ok: false;
  error: E;
}

export interface AuthType {
  email: string;
  password: string;
}

export interface AuthFormType {
  authType: 'signin' | 'signup';
}

export interface UserType {
  access_token: string;
}

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface FailedResponseBody {
  error: string;
  message: string[];
  statusCode: number;
}

export type Result<T, E = Error> = Success<T> | Failed<E>;
