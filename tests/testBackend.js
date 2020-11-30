const { By, Key, until } = require('selenium-webdriver');

const testBackend = async (driver) => {
    await driver.get("http://localhost:3000/value");
    // Get response as JSON
    const json = JSON.parse(await driver.findElement(By.css('Body')).getText());
    return json;
};

module.exports = testBackend;
