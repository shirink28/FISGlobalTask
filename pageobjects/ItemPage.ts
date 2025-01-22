import { Page } from "@playwright/test";

export default class ItemPage
{
    page: Page;

    constructor(page : Page)
    {
        this.page = page;
    }

    getCartCountLocator()
    {
        return this.page.locator("//span[@class='badge']");
    }

    getEmittingColorBtn()
    {
        return this.page.getByRole('button', { name: 'Version: Select' });
    }

    getListBox()
    {
        return this.page.getByRole('listbox');
    }

    getAddToCart()
    {
        return this.page.getByRole('link', { name: 'Add To Cart' });
    }

    getCloseOverlayBtn()
    {
        return this.page.getByRole('button', { name: 'Close Overlay' });
    }

    async GetCartCount()
    {
        return (await this.getCartCountLocator().isVisible()) ? parseInt((await this.getCartCountLocator().textContent())!) : 0;
    }

    async AddItemToCart()
    {
        await this.getAddToCart().waitFor();

        //For a specific search result it was required to select value from dropdown in order to proceed with add to cart.
        if(await this.getEmittingColorBtn().isVisible())
        {
            await this.getEmittingColorBtn().click();
            await (await this.getListBox().getByRole('option').all()).at(1)?.click();
        }
        await this.getAddToCart().click();
        await this.page.locator("//div[@class='ux-section__item']//span[contains(text(),'See in cart')]").waitFor();
        await this.getCloseOverlayBtn().click();
    }
}