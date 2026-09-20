import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Login and add product', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.login();

    // Product
    const productName = 'Test.allTheThings() T-Shirt (Red)';

    await inventoryPage.addProduct(productName);

    // Cart
    await inventoryPage.goToCart();

    // Verify
    await cartPage.verifyProduct(productName);

});