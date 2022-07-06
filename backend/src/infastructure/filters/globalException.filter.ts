import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { CannotCreateEntityIdMapError } from 'typeorm/error/CannotCreateEntityIdMapError';
import { GlobalResponseError } from './global.response.error';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message = (exception as any).message.message;
    let code = 'HttpException';
    let initialized = null;
    let userId = null;

    Logger.error(
      message,
      (exception as any).stack,
      `${request.method} ${request.url}`,
    );

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    switch (exception.constructor) {
      case HttpException:
        status = (exception as HttpException).getStatus();
        break;
      case QueryFailedError: // this is a TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as QueryFailedError).message;
        code = (exception as any).code;
        break;
      case EntityNotFoundError: // this is another TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as EntityNotFoundError).message;
        code = (exception as any).code;
        break;
      case CannotCreateEntityIdMapError: // and another
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as CannotCreateEntityIdMapError).message;
        code = (exception as any).code;
        break;
      case BadRequestException:
        status = HttpStatus.BAD_REQUEST;
        message = (exception as BadRequestException).message;
        code = 'BadRequestException';
        break;
      case ConflictException:
        status = HttpStatus.CONFLICT;
        message = (exception as ConflictException).message;
        initialized = ((exception as ConflictException).getResponse() as any)
          .initialized;
        userId = ((exception as ConflictException).getResponse() as any).userId;
        code = 'ConflictException';
        break;
      case UnauthorizedException:
        status = HttpStatus.UNAUTHORIZED;
        message = (exception as UnauthorizedException).message;
        initialized = (
          (exception as UnauthorizedException).getResponse() as any
        ).initialized;
        code = 'UnauthorizedException';
        break;
      case NotFoundException:
        status = HttpStatus.NOT_FOUND;
        message = (exception as NotFoundException).message;
        code = 'NotFoundException';
        break;
      case UnprocessableEntityException:
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as UnprocessableEntityException).message;
        code = 'UnprocessableEntityException';
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    // CHECK for unique violation
    if (code === '23505') {
      status = HttpStatus.CONFLICT;
    }

    response
      .status(status)
      .json(
        GlobalResponseError(
          status,
          message,
          code,
          request,
          initialized,
          userId,
        ),
      );
  }
}
