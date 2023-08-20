import { test, expect } from '@playwright/test';

//Sanity Test:
test.describe('@sanity', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  });
  test('verify successful login', async ({ page }) => {
    await expect(page.waitForURL("https://www.saucedemo.com/inventory.html")).toBeVisible
    await expect(page.locator('[class="app_logo"]')).toBeVisible();
  });
  test('verify succesful log out', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.waitForURL("https://www.saucedemo.com/")).toBeVisible
  })
});

//Smoke  Test:
test.describe('@smoke', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.waitForURL("https://www.saucedemo.com/inventory.html")).toBeVisible
    await expect(page.locator('[class="app_logo"]')).toBeVisible();
  });

  test('add products', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  })
  test('log out', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  })

})

//Regression Test:
test.describe('@regression', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.waitForURL("https://www.saucedemo.com/inventory.html")).toBeVisible
    await expect(page.locator('[class="app_logo"]')).toBeVisible();
  });

  test('add products and checkout', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('a').filter({ hasText: '2' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Olatunde');
    await page.locator('[data-test="lastName"]').fill('Oladeni');
    await page.locator('[data-test="postalCode"]').fill('M24 6FD');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
  })
  test('log out', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  })

})

