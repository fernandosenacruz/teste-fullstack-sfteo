import { ErrorRequestHandler } from 'express';
import StatusCodes from 'http-status-codes';

export const errorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  next,
) => {
  console.log(err);
  if (err.isJoi) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      statusCode: StatusCodes.BAD_REQUEST,
      message: err.details[0].message,
    });
  }

  if (err.statusCode === StatusCodes.INTERNAL_SERVER_ERROR)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message,
    });

  return next();
};
