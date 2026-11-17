class Base {
    constructor (page){
        this.page = page;
        this.pageUrl = ('https://demowebshop.tricentis.com/');
    }
    async pageOpen() {
        await this.page.goto(this.pageUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

            console.log('Browser opened successfully');
    }

    async clickElement(locator){
        await locator.click();
    }
}
export { Base};