import hello from './index';

describe('Testing Hello lambda configuration', () => {
  it('should create Hello lambda configuration', () => {
    expect(hello).toMatchSnapshot();
  });
});
