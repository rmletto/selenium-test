const testBackend = require('./testBackend');

test('Tests the /value endpoint', async () => {
    expect(await testBackend()).toBe("http://localhost:3000/value");
});
