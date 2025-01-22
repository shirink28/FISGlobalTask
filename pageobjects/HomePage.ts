import { expect, Page } from "@playwright/test";

export default class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getAcceptCookiesBtn() {
        return this.page.locator('#gdpr-banner-accept');
    }

    getSearchBox()
    {
        return this.page.locator("//div//input[@role='combobox']");
    }

    getSearchBtn()
    {
        return this.page.locator("#gh-search-btn");
    }

    async AcceptCookies() { 
        //Wait for Accept Cookies and Click.
        await this.getAcceptCookiesBtn().waitFor();
        if (await this.getAcceptCookiesBtn().isVisible()) {
            await this.getAcceptCookiesBtn().click();
            await expect(this.getAcceptCookiesBtn()).toBeHidden();
        }
    }

    async Search(text: string) {
        await this.getSearchBox().fill("book");
        await this.getSearchBtn().click();
    }

    async OpenFirstResult(): Promise<Page> {
        const newTabPromise = this.page.context().waitForEvent('page');
        await this.page.locator('.srp-results.srp-list.clearfix').getByRole('listitem').getByRole('heading', { level: 3 }).first().click();
        return await newTabPromise;
    }
}