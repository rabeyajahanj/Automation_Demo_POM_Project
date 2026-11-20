import { test, expect } from '@playwright/test';
import { Registration } from '../Pages/Registration.js';
import { Search } from '../Pages/Search.js';
import { Product } from '../Pages/Product.js';
import { Checkout } from '../Pages/Checkout.js';
import { Cart } from '../Pages/Cart.js';

test('Q3 Product Search - verify the correct product appears in the search results ', async ({ page }) => {
  
  const registration = new Registration(page);
  const search = new Search(page);
  const product = new Product(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);


  const email = `rabeya.${Date.now()}@example.com`;   //each time new email id create using thsi object
  const productName = 'Computing and Internet';

  //RegistrationPage
  await registration.pageOpen();
  await registration.ClickRegistrationLink();

  await registration.ClickGenderButton();
  await registration.InsertFName('Rabeya');
  await registration.InsertLName('Jahan');

  await registration.EnterEmail(email);
  await registration.EnterPassword('Abc12345678');

  await registration.ConfirmPassword('Abc12345678');
  await registration.ClickRegistrationButton();
  await expect(registration.verifyRegistration).toContainText('Your registration completed');
  await registration.ClickContinue();


  //Search
  await search.SearchFor(productName);
  await search.ClickOnSearchButton();
  await search.ShowResult();
  await search.OpenResult();

  
  //Product
  await product.Name(productName);
  await expect(product.productTitle).toHaveText(productName);
  await product.AddToCart();
  await expect(product.successBar).toContainText('The product has been added to your shopping cart');


  //cart
  await cart.ClickOnCartLink();
  await expect(cart.cartRows.first()).toContainText(productName);
  

  //Checkout
  await checkout.AgreeToTerms();
  await checkout.ClickCheckoutButton();
  
});
