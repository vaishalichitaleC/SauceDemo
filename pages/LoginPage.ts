import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async login() {

        await this.page.locator("//input[@id='user-name']")
            .fill("standard_user");

        await this.page.locator("//input[@id='password']")
            .fill("secret_sauce");

        await this.page.locator("//input[@id='login-button']")
            .click();
    }
}