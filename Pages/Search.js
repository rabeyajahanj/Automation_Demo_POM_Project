import { Base } from './Base.js';

class Search extends Base {
  constructor(page) {
    super(page);
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('input.search-box-button');
    this.resultTitles = page.locator('.search-results .product-item .product-title a');
  }

  async SearchFor(productName) {
    await this.searchBox.fill(productName);
  
  }

  async ClickOnSearchButton(){
    await this.clickElement(this.searchButton);
  }

  async ShowResult() {
    const result = this.resultTitles.first();
    await result.waitFor({ state: 'visible' });
    return (await result.innerText()).trim();
  }

  async OpenResult(){
    await this.clickElement(this.resultTitles.first());
  }
}
export { Search };