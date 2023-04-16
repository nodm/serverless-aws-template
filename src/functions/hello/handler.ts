import { StatusCodes } from 'http-status-codes';

const hello = async (): Promise<{ statusCode: StatusCodes; body: string }> =>
  Promise.resolve({
    statusCode: StatusCodes.OK,
    body: 'Hello World!',
  });

export const main = hello;
