const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test(`delete button`, async () => {
  let inputElement = await driver.findElement(By.xpath("//input"));

  await inputElement.sendKeys(`Tenet`);

  let buttonElement = await driver.findElement(By.css(`button`));

  await buttonElement.click();

  await driver.sleep(1000);

  let movieButton = await driver.findElement(By.id(`Tenet`));

  await movieButton.click();

  await driver.sleep(1000);
});

test(`cross element`, async () => {
  let inputElement = await driver.findElement(By.xpath("//input"));

  await inputElement.sendKeys(`Tenet`);

  let buttonElement = await driver.findElement(By.css(`button`));

  await buttonElement.click();

  let nameMovie = await driver.findElement(By.css(`span`));

  await nameMovie.click();

  await driver.sleep(1000);
});
