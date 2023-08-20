// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://ui.freecrm.com/');
});

test('it has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cogmento CRM/);
});
test('it has successfully logged in', async ({ page }) => {
  //Validate successful login.
  await page.getByPlaceholder('Email').type('olatundeoladeni@yahoo.com');
  await page.getByPlaceholder('Password').type('1Latunde');
  await page.getByText('Login').click();
  await expect(page.getByRole('link', { name: 'Free account' })).toBeVisible();
});


