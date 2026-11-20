import { Base } from "./Base.js";

class Cart extends Base{
  constructor(page) {
    super(page);
    this.cartLink = page.locator('a[href="/cart"]').first();
    this.cartRows = page.locator('.cart-item-row');
  }

  async ClickOnCartLink() {
    await (this.cartLink).click();
  }

  async CartRows(){
    await this.clickElement(this.cartRows);
  }
}

export { Cart }; 