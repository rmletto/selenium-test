const testBackend = require('./testBackend');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('back-end REST API testing example', () => {
    // Open the server and keep a reference to it
    const server = require('../index');

    // This works for GitHub actions, I don't really understand why
    // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html
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
