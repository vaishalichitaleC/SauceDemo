import { Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    async addProduct(productName: string) {

        const product = this.page.locator('.inventory_item').filter({
            hasText: productName
        });

        await product.getByRole('button', {
            name: 'Add to cart'
        }).click();
    }

    async goToCart() {

        await this.page.locator(
            "//a[@data-test='shopping-cart-link']"
        ).click();
    }
}