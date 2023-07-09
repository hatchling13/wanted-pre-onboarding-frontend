import { getData } from './backend';
import { failed, parseResponseBody, succeeded } from './utils';

import type { TodoType } from './types';

export const todoGet = async (token: string) => {
  const response = await getData('/todos', token);

  if (!response.ok) {
    return failed(Error(response.statusText));
  }

  const body = await response.json();

  const parsedBody = parseResponseBody<TodoType>(body);

  if (!parsedBody.ok) {
    return failed(parsedBody.error);
  }

  return succeeded(parsedBody.value);
};
