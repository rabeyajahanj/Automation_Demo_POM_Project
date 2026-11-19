import { Base  } from "./Base.js";

class Product extends Base {
 constructor(page){
    super(page);
   this.productTitle = page.locator('.product-name h1');
   this.addtocartButton = page.locator('input[id^="add-to-cart-button-"]');
   this.successBar = page.locator('.bar-notification.success'); 
 }

  async Name(){
    return (await this.productTitle.innerText()).trim();
  }  
 
 async AddToCart(){
   await this.clickElement(this.addtocartButton);
  }

}
export { Product };
