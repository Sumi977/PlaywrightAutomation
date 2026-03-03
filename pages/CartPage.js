exports.Cartpage = class CartPage {

    constructor(page){

        this.page = page;
        this.cartProducts = "//tbody[@id='tbodyid']/tr/td[2]";


    }
    async checkProductInCart(productname){

        const productsInCart = await this.page.$$(this.cartProducts);

        for(const prdct of productsInCart){
            console.log(await prdct.textContent());
            if(productname === await prdct.textContent()){
                return true;
                break;

            }
        }

    }
}