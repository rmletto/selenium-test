# selenium-test

A very simple web application put together to learn how to use Selenium, Jest and GitHub Actions.

The web application itself is an Express.js app that serves a basic HTML file. It also has a
sample REST API endpoint which returns a sample value.

Selenium is used for both front-end and REST API tests. There is probably a better way than using
Selenium for REST API testing, such as Postman or reading response data from raw HTTP requests but
it works.

Jest is used to create the test suite running the tests. The test suite starts up the Express
server locally for WebDriver to perform tests on it.

GitHub Actions run on pull requests and on each push to main and on each pull request going into
main. These actions run the Jest suite.
