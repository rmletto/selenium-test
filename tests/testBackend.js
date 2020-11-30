const {Builder, By, Key, until} = require('selenium-webdriver');

const testBackend = async (driver) => {
    await driver.get("http://localhost:3000/value");
    return driver.getCurrentUrl();
};

module.exports = testBackend;
