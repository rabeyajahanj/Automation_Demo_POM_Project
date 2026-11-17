import { Base  } from "./Base.js";

class Product extends Base {
 constructor(page){
    super(page);
   this.addtocartButton = page.locator('input[id^="add-to-cart-button-"]');
   this.successBar = page.locator('.bar-notification.success'); 
 }
 
  async AddToCart(){
   await this.clickElement(this.addtocartButton);
  }

}
export { Product };
