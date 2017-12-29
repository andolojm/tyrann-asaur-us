const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until,
  Key = webdriver.Key;

const chromeCapabilities = webdriver.Capabilities.chrome()
chromeCapabilities.set('chromeOptions', { 'args': ['--headless', '--disable-gpu'] })
const driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build()

const rootUrl = "http://localhost:8080/"

module.exports = {
  init: () => driver.get(rootUrl),
  loadHomepage: () => {
    return driver.findElement(By.id("header-name"))
    .then(header => header.getText())
    .then(text => goHomeThenReturn(text))
  },
  quit: () => driver.quit(),
}

/*

  Selenium Utility Methods

*/

// Navigate to main page, then resolve with the callback value.
const goHomeThenReturn = returnValue =>
  new Promise((res, rej) =>
    driver
      .get(rootUrl)
      .then(() => res(returnValue))
  );

// Close current tab, reset to last open tab, then resolve with the callback value.
const closeTabThenReturn = returnValue =>
  new Promise((res, rej) =>
    driver
      .close()
      .then(() => driver.getAllWindowHandles())
      .then(handles => driver.switchTo().window(handles[handles.length - 1]))
      .then(() => res(returnValue))
  );

// Resolve to a function call after a specified delay
const waitThenExecute = (fn, ms) =>
  new Promise((res, rej) => setTimeout(() => res(fn()), ms));