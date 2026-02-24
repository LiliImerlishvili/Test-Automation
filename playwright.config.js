// @ts-check

const { defineConfig, devices } = require('@playwright/test');


const config =  ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
      timeout: 40 * 1000,
  },
  reporter : 'html',

  use: 
  {
    // Base URL to use in actions like `await page.goto("/")`.
    browserName: 'chromium',

  }

})
module.exports = config;