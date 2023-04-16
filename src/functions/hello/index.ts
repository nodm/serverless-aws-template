import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 128,
  timeout: 5,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
      },
    },
  ],
};
