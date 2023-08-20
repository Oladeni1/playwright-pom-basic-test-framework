// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('visual snapshot test', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});
test('visual snapshot of full home page test', async ({ page }) => {
    // @ts-ignore
    return expect(await page.screenshot()).toMatchSnapshot('fullhomepage.png', { fullPage: true });
});
test('visual snapshot iphone device test', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('homepage_iphone.png');
});
test('visual snapshot samsung device test', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('homepage_samsung.png');
});