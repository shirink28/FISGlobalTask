import { test, expect } from '@playwright/test';
import HomePage from '../../pageobjects/HomePage';
import ItemPage from '../../pageobjects/ItemPage';

test('Verify item can be added to Cart', async ({ page }) => {

    await page.goto(process.env.URL!);

    const homePage = new HomePage(page);
    await homePage.AcceptCookies();
    await homePage.Search('book');

    const itemPage = new ItemPage(await homePage.OpenFirstResult());

    const cartCount = await itemPage.GetCartCount();
    await itemPage.AddItemToCart();

    await expect(itemPage.getCartCountLocator()).toBeVisible();
    expect(await itemPage.GetCartCount()).toEqual(cartCount + 1);

});