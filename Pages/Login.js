 import { Base } from './Base.js';

class Login extends Base {
  constructor(page) {
    super(page);
    this.loginLink = page.locator("a[href='/login']");
    this.emailField = page.getByLabel("Email");
    this.passwordField = page.locator('#Password');
    this.rememberMeCheckbox = page.locator('#RememberMe');
    this.loginButton = page.locator('input.login-button');
    this.verifyLogin = page.locator('a.ico-logout');
    this.errorMessage = page.locator('.validation-summary-errors');
  }

  async ClickOnloginLink(){
    await this.clickElement(this.loginLink);
  }

  async EnterEmail(Email){
    await this.emailField.fill(Email);
  }

  async EnterPassword(Password){
    await this.passwordField.fill(Password);
  }

  async ClickonCheckBox(){
    await this.clickElement(this.rememberMeCheckbox);
  }

  async ClickOnloginButton(){
    await this.clickElement(this.loginButton);
  }

}
export { Login };