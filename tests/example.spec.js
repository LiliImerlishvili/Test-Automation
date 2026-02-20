const { test, expect } = require('@playwright/test');

test('My first test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});