import { test, expect } from '@playwright/test';
import { Registration } from '../Pages/Registration.js';
import { Login } from '../Pages/Login.js';
import { Category } from '../Pages/Category.js';
import { Product } from '../Pages/Product.js';
import { Cart } from '../Pages/Cart.js';

test('Q2 - Register & Add Product to Cart  ', async ({ page }) => {

  const registration = new Registration(page);
  const LoginPage = new Login(page);
  const category = new Category(page);
  const product = new Product(page);
  const cart =new Cart(page);


  const email = `rabeya.${Date.now()}@example.com`;   //each time new email id create using thsi object

  
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

 //again login
  await expect(LoginPage.verifyLogin).toBeVisible();
  await LoginPage.verifyLogin.click(); // log out
  await LoginPage.ClickOnloginLink();
  await LoginPage.EnterEmail(email);
  await LoginPage.EnterPassword('Abc12345678');
  await LoginPage.ClickOnloginButton();
  await expect(LoginPage.verifyLogin).toBeVisible();


  //category
  await category.OpenCategory();
  const productName = await category.ClickFirstBook();
  await product.AddToCart();
  await expect(product.successBar).toContainText('The product has been added to your shopping cart');

  //cart
  await cart.ClickOnCartLink();
  await expect(cart.cartRows.first()).toContainText(productName);
  await expect(cart.cartRows.first().locator('input.qty-input')).toHaveValue('1');
});


// test('Q3 Product Search - verify the correct product appears in the search results ', async ({ page }) => {
//   const search = new Search();
//   await search.OpenResult();

// });

