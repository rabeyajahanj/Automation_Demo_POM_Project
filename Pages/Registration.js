import { Base } from './Base.js'

class Registration extends Base { 
   constructor(page){
    super (page);
    this.registrationlink = page.locator('a[href="/register"]');
    this.genderRedioButton = page.locator('#gender-female');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.getByLabel('Email:');
    this.passwordInput = page.locator('#Password');  
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
    this.verifyRegistration = page.locator('.result');
    this.continueButton = page.locator('input.register-continue-button');
 }


   async ClickRegistrationLink(){
     await this.clickElement(this.registrationlink);
   }

   async ClickGenderButton(){
    await this.clickElement(this.genderRedioButton);
   }

   async InsertFName(FirstName){
    await this.firstNameInput.fill(FirstName);
   }

   async InsertLName(LastName){
    await this.lastNameInput.fill(LastName);
   }

   async EnterEmail(Email){
    await this.emailInput.fill(Email);
   }

   async EnterPassword(Password){
    await this.passwordInput.fill(Password);
   }
  
   async ConfirmPassword(Password){
    await this.confirmPasswordInput.fill(Password);
   }


   async ClickRegistrationButton(){
    await this.clickElement(this.registerButton);
   }

  async ClickContinue(){
    await this.clickElement(this.continueButton);
  }
}

export { Registration };