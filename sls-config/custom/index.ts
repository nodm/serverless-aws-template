import type { Custom } from 'serverless/aws';
import { dotenv } from './dotenv';
import { prune } from './prune';
import { serverlessOffline } from './serverless-offline';
import { webpack } from './webpack';

export const custom: Custom = {
  dotenv,
  prune,
  'serverless-offline': serverlessOffline,
  webpack,
};
