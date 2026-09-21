import { test } from '@playwright/test';

test('Hello Playwright', async ({ page }) => {
    console.log('Hello Playwright');

    await page.goto('https://www.google.com');

    console.log('Browser opened successfully');
});