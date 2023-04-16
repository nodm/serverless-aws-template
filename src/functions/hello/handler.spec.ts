import { main } from './handler';

describe('Test "hello" lambda', () => {
  it('should return greetings', async () => {
    expect(await main()).toEqual({
      statusCode: 200,
      body: 'Hello World!',
    });
  });
});
