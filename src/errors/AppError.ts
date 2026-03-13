export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(message: string, statusCode = 400, code: string) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
  }
}

export class ConflictError extends AppError {
  constructor(message: string, code: string) {
    super(message, 409, code);
    this.name = 'ConflictError';
  }
}
