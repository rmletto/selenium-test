const { By, Key, until } = require('selenium-webdriver');

const testText = async (driver) => {
    await driver.get('http://localhost:3000');
    const text = await driver.findElement(By.name('h1text')).getText();
    console.log(text);
    return text;
};

const testButton = async (driver) => {
    await driver.get('http://localhost:3000');
    const button = await driver.findElement(By.id('btn')).click();

    // Wait for the alert to be displayed
    await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
    const alert = await driver.switchTo().alert();

    const alertText = await alert.getText();
    await alert.accept();

    return alertText;
};

module.exports = {
    testText,
    testButton
};
