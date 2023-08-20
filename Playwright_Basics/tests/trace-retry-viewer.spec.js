import { test, expect } from '@playwright/test';

test('sauce demo codegen recorded test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Olatunde');
  await page.locator('[data-test="lastName"]').fill('Oladeni');
  await page.locator('[data-test="postalCode"]').fill('M24 6FD');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish123"]').click(); //invalid locator
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});