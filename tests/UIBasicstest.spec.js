const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://getbot.ai/login');
  console.log(await page.title());

  await expect(page).toHaveURL(/\/login/);

  await context.close();
});

test('Page Playwright test', async ({ page }) => {
  await page.goto('https://getbot.ai/login');
  console.log(await page.title());

  await expect(page).toHaveURL(/\/login/);
});