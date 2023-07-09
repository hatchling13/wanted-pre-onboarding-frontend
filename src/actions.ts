import type { ActionFunctionArgs } from 'react-router-dom';

import { postData } from './backend';
import {
  authFormDataParse,
  failed,
  parseResponseBody,
  succeeded,
} from './utils';
import { UserType } from './types';

const authPost = async (endpoint: string, { request }: ActionFunctionArgs) => {
  const authData = await authFormDataParse(request);

  if (!authData.ok) {
    return failed(authData.error);
  }

  if (!authData.value) {
    return failed(Error('Unknown Error'));
  }

  const response = await postData(endpoint, authData.value);

  return succeeded(response);
};

export const signInAction = async (args: ActionFunctionArgs) => {
  const endpoint = '/auth/signin';

  const response = await authPost(endpoint, args);

  if (!response.ok) {
    return failed(response.error);
  }

  if (!response.value?.ok) {
    return failed(Error(response.value?.statusText));
  }

  const body = await response.value.json();

  const parsedBody = parseResponseBody<UserType>(body);

  if (!parsedBody.ok) {
    return failed(parsedBody.error);
  }

  return succeeded(parsedBody.value);
};

export const signUpAction = async (args: ActionFunctionArgs) => {
  const endpoint = '/auth/signup';

  const response = await authPost(endpoint, args);

  if (!response.ok) {
    return failed(response.error);
  }

  if (!response.value) {
    return failed(Error('Unknown Error'));
  }

  if (!response.value.ok) {
    const errorBody = await response.value.json();

    const parsedBody = parseResponseBody<void>(errorBody);

    if (!parsedBody.ok) {
      return failed(parsedBody.error);
    }

    // Unreachable code
    return succeeded(parsedBody);
  }

  return succeeded(undefined);
};
