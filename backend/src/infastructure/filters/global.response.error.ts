import { Request } from 'express';
import { IResponseError } from './response.error.interface';

export const GlobalResponseError: (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
  initialized?: boolean,
) => IResponseError = (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
  initialized?: boolean,
): IResponseError => {
  return {
    statusCode: statusCode,
    message,
    code,
    timestamp: new Date().toISOString(),
    path: request.url,
    method: request.method,
    initialized,
  };
};
