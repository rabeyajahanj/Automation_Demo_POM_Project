import { test, expect } from '@playwright/test';
import { Search } from '../Pages/Search.js'
import { Checkout } from '../Pages/Checkout.js'

test('Q3 Product Search - verify the correct product appears in the search results ', async ({ page }) => {
  const search = new Search(page);
  await search.SearchFor();
  await search.ClickOnSearchButton();

await expect(search.resultTitles.first()).toBeVisible();
const productName = await search.ShowResult();
expect(productName).toContain('Computing and Internet');

//Checkout
const checkout = new Checkout(page);
await checkout.AgreeToTerms();
await checkout.ClickCheckoutButton();
await expect(checkout.orderCompleted).toBeVisible();
await expect(checkout.orderCompleted).toContainText('Your order has been successfully processed');
await expect(checkout.orderNumber).toBeVisible();

});
