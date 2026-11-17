import { Base } from "./Base.js";

class Cart {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('a[href="/cart"]').first();
    this.cartRows = page.locator('.cart-item-row');
  }

  async ClickOnCartLink() {
    await this.cartLink.click();
  }
}

export { Cart }; 