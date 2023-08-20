import { test, expect } from '@playwright/test';

test('login saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.close()
});
test('login applitools', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await expect(page.locator('[class="auth-header"]')).toBeVisible()
  await page.locator('[id="username"]').fill('test');
  await page.locator('[id="password"]').fill('test1234');
  await page.click('[id="log-in"]');
  await page.close()
});
test('login orangehrmlive', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php');
  await page.locator('[name="username"]').fill('Admin');
  await page.locator('[name="password"]').fill('admin123');
  await page.click('[type="submit"]');
  await page.close()
});
