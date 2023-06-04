export class ParseError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'ParseError';

    Object.setPrototypeOf(this, ParseError.prototype);
  }
}

export class HTTPFailedError extends Error {
  statusCode: number;

  constructor(error: string, status: number) {
    super(error);

    this.name = 'HTTPFailedError';
    this.statusCode = status;

    Object.setPrototypeOf(this, HTTPFailedError.prototype);
  }
}

export class NotFoundError extends HTTPFailedError {
  errorMessage: string;

  constructor(messages: string[], error: string) {
    super(error, 404);

    this.name = 'NotFoundError';
    this.errorMessage = messages[0];

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class BadRequestError extends HTTPFailedError {
  errorMessages: string[];

  constructor(messages: string[], error: string) {
    super(error, 400);

    this.name = 'BadRequestError';
    this.errorMessages = messages;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
