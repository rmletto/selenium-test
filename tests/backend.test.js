const testBackend = require('./testBackend');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('back-end REST API testing example', () => {
    // Open the server and keep a reference to it
    const server = require('../index');

    // Start up a webdriver
    const driver = new Builder().forBrowser('chrome').build();

    test('Tests the /value endpoint', async () => {
        expect(await testBackend(driver)).toBe("http://localhost:3000/value");
    });
    
    afterAll(async () => {
        await server.close();
        await driver.close();
    });
});
