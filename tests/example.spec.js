const { test, expect } = require('@playwright/test');

// This is an example test. You can run it with the command
test('My first test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});