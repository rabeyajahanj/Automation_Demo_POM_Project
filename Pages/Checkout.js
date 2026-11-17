import { Base } from './Base.js';

class Checkout extends Base {
  constructor(page) {
    super(page);
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
    this.orderCompleted = page.locator('.section.order-completed');
    this.orderNumber = page.locator('.order-number');
  }

  async AgreeToTerms() {
    await this.termsCheckbox.check();
  }

  async ClickCheckoutButton() {
    await this.clickElement(this.checkoutButton);
  }
}

export { Checkout };