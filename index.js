const {Builder} = require('selenium-webdriver');
async function seleniumExample() {
    const driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.segracatering.ro/catering-zilnic.html');
    let productName = document.querySelectorAll('.ta-left');
    
}

seleniumExample();