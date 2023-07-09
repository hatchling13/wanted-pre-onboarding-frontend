// All error handled by React Router default ErrorBoundary
// Fallbacks to provided errorElement

import type { AuthType } from './types';

const API_ROOT = 'http://localhost:8000';

export const postData = async (endpoint: string, data: AuthType) => {
  const request: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return await fetch(`${API_ROOT}${endpoint}`, request);
};

export const getData = async (endpoint: string, token: string) => {
  const request: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await fetch(`${API_ROOT}${endpoint}`, request);
};
