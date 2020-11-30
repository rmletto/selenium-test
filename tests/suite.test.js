const testBackend = require('./testBackend');
const { testText, testButton } = require('./testFrontend');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Sample test suite', () => {
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

    test('Makes sure the text is set proper', async () => {
        expect(await testText(driver)).toBe('This is some text.');
    });

    test('Makes sure the alert shows the correct text', async () => {
        expect(await testButton(driver)).toBe('Sample text');
    });
    
    afterAll(async () => {
        await server.close();
        await driver.close();
    });
});
