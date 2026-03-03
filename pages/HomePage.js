exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.products = "//div[@id='tbodyid']/div/div/div/h4/a";
        this.addtoCartButton = "//a[normalize-space()='Add to cart']";
        this.cartLink = '#cartur';

    }

    async addtocart(name){

        const products = await this.page.$$(this.products);

        for(const product of products)
        {
            console.log(product.textContent());
            if(name === await product.textContent())
            {
                await product.click();
                break;
            }
        }
         await this.page.on('dialog', async dialog => {

            if(dialog.message().includes('Product added.')){
            await dialog.accept();
            }

            })
            await this.page.locator(this.addtoCartButton).click();

    }
    async goToCart(){
        await this.page.locator(this.cartLink).click();
    }

}