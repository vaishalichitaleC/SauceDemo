import { test, expect } from '@playwright/test';

test('Hello World', async ({ page }) => {
    await page.goto('https://www.google.com');

    console.log('Hello World');

    await expect(page).toHaveTitle(/Google/);
});
