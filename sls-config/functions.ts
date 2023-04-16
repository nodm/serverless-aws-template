import type { Functions } from 'serverless/aws';
import { hello } from '@functions/index';

export const functions: Functions = { hello };
