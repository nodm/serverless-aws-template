import type { Serverless } from 'serverless/aws';
import { custom, functions, plugins, provider, packageConfig } from './sls-config/index';

const serverlessConfiguration: Serverless = {
  service: 'lt-stamps',
  frameworkVersion: '3',
  configValidationMode: 'error',
  plugins,
  provider,
  functions,
  package: packageConfig,
  custom,
};

module.exports = serverlessConfiguration;
