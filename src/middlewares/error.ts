import { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  if (err.statusCode === StatusCodes.BAD_REQUEST) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      statusCode: StatusCodes.BAD_REQUEST,
      message: err.message,
    });
  }

  if (err.statusCode === StatusCodes.INTERNAL_SERVER_ERROR)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message,
    });

  return next();
};
