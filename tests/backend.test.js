const testBackend = require('./testBackend');

beforeAll(() => {
    return startServer();
});

test('Tests the /value endpoint', async () => {
    expect(await testBackend()).toBe("http://localhost:3000/value");
});
