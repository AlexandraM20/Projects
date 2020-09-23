const { Builder } = require("selenium-webdriver");

async function seleniumExample() {
  const driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.segracatering.ro/catering-zilnic.html");

  let products = await driver.executeScript(
    () => document.querySelectorAll("td.ta-left p")
  );
  let mapProducts = products.map(x => x.innerText);

  setTimeout(function () {
    console.log(mapProducts);
  }, 4000);
}

seleniumExample();
