import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login.js';

test('Q1 Invalid Login — Attempt to log in using an invalid email/password combination. ', async ({ page }) => {

  const LoginPage = new Login(page);

  await LoginPage.pageOpen();
  await LoginPage.ClickOnloginLink();
  // await page.waitForTimeout(2000);

  await LoginPage.EnterEmail('rabeyainvalid#@gmail.com');
  await LoginPage.EnterPassword('Abc12345678');
  // await page.waitForTimeout(2000);

  await LoginPage.ClickonCheckBox();  
  await LoginPage.ClickOnloginButton();
  
  // await page.waitForTimeout(2000);

  await expect(LoginPage.errorMessage).toBeVisible();
  await expect(LoginPage.errorMessage).toContainText('Login was unsuccessful');

  await expect(LoginPage.verifyLogin).toHaveCount(0);
  await expect(LoginPage.loginLink).toBeVisible();
  // await page.waitForTimeout(2000);

  //await page.pause();

});