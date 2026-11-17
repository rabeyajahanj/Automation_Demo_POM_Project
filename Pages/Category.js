import { Base } from './Base.js'

class Category extends Base {
  constructor(page) {
    super(page);
    this.catergoryOfBooks = page.locator('.top-menu a[href="/books"]');
    this.firstProduct = page.locator('.product-item .product-title a').first();
  }
  async OpenCategory() {
    await this.clickElement(this.catergoryOfBooks);
  }

  async ClickFirstBook(){
    const bookName = (await this.firstProduct.innerText()).trim();
    await this.clickElement(this.firstProduct);
  
    return bookName;
  }
}

export { Category };