const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  resetMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [compilerOptions.baseUrl],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/test/mock/', '/test/fixtures/'],
  testMatch: ['**/src/**/*.spec.ts'],
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/test/setup.js'],
}
