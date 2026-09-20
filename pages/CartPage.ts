import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifyProduct(productName: string) {

        await expect(
            this.page.locator("//div[@data-test='inventory-item-name']")
        ).toHaveText(productName);
    }
}