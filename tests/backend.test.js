const testBackend = require('./testBackend');
const {Capabilities, Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('back-end REST API testing example', () => {
    // Open the server and keep a reference to it
    const server = require('../index');

    const chromeOptions = {
        'args': ['--no-sandbox', '--disable-dev-shm-usage', '--headless', '--remote-debugging-port=9222']
    };
    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();

    test('Tests the /value endpoint', async () => {
        expect(await testBackend(driver)).toBe('http://localhost:3000/value');
    });
    
    afterAll(async () => {
        await server.close();
        await driver.close();
    });
});
