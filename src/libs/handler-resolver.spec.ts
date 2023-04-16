import { handlerPath } from './handler-resolver';

describe('Test "handlerPath"', () => {
  it('should replace backslashes with slashes in a path', () => {
    expect(handlerPath(`${process.cwd()}\\some\\path\\to.file`)).toEqual('some/path/to.file');
  });
});
