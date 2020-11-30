const testBackend = require('./testBackend');
const {Capabilities, Builder, By, Key, until} = require('selenium-webdriver');

describe('back-end REST API testing example', () => {
    // Open the server and keep a reference to it
    const server = require('../index');

    const chromeCapabilities = Capabilities.chrome();
    const chromeOptions = {
        'args': ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    const driver = new Builder().withCapabilities(chromeCapabilities).build();

    test('Tests the /value endpoint', async () => {
        expect(await testBackend(driver)).toBe('http://localhost:3000/value');
    });
    
    afterAll(async () => {
        await server.close();
        await driver.close();
    });
});
