const { Builder, By, until } = require('selenium-webdriver');

async function runTest(env) {

    let driver = await new Builder()
        .usingServer('https://hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            browserName: env.browserName,
            deviceName: env.deviceName,
            'bstack:options': {
                os: 'Windows',
                osVersion: '11',
                userName: process.env.BROWSERSTACK_USERNAME,
                accessKey: process.env.BROWSERSTACK_ACCESS_KEY
            }
        })
        .build();

    try {

        await driver.get("https://mounikavakacharlla.github.io/CBT-BS/");

        await driver.findElement(By.id('username')).sendKeys('admin');

        await driver.findElement(By.id('password')).sendKeys('admin123');

        await driver.findElement(By.css('.login')).click();

        let message = await driver.findElement(By.id('message')).getText();

        console.log(browserName + " => " + message);

    } finally {
        await driver.quit();
    }
}

const environments = [

    {
        browserName: 'Chrome',
        os: 'Windows',
        osVersion: '11'
    },

    {
        browserName: 'Firefox',
        os: 'Windows',
        osVersion: '11'
    },

    {
        browserName: 'Edge',
        os: 'Windows',
        osVersion: '11'
    },

    {
        browserName: 'Safari',
        os: 'OS X',
        osVersion: 'Ventura'
    },

    {
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0'
    },

    {
        deviceName: 'iPhone 14',
        osVersion: '16'
    }

];

(async () => {

    for (let env of environments) {
    await runTest(env);
}

})();