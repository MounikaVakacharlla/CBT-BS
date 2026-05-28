const { Builder } = require('selenium-webdriver');

const capabilities = {
  browserName: 'Chrome',
  'bstack:options': {
    os: 'Windows',
    osVersion: '11',
    userName: 'vakacharllamohan_LX29qo',
    accessKey: 'yHEht5kaweHzY5qUczkd',
    buildName: 'cloud-testing-build',
    sessionName: 'BrowserStack Test'
  }
};

(async function browserStackTest() {

  let driver = await new Builder()
    .usingServer('https://hub.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

  await driver.get('https://example.com');

  console.log(await driver.getTitle());

  await driver.quit();

})();