import { test, expect } from '@playwright/test';
test('login test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();

    const productName = 'Test.allTheThings() T-Shirt (Red)';

    const product = page.locator('.inventory_item').filter({
        hasText: productName
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();

    await page.locator("//a[@data-test='shopping-cart-link']").click();

    // Verify product is present
    await expect(
        page.locator("//div[@data-test='inventory-item-name']")
    ).toHaveText("Test.allTheThings() T-Shirt (Red)");


});
