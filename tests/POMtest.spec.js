import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { HomePage } from '../pages/Homepage';
import { Cartpage } from '../pages/CartPage';

test('test', async ({page}) => {
     
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();

    await loginPage.login('Shyama','test123');
    await page.waitForTimeout(3000);

    
    //Home
    const homePage = new HomePage(page);
    await homePage.addtocart('Nexus 6');
    await page.waitForTimeout(3000);
    await homePage.goToCart();

   //Cart

   const cartPage = new Cartpage(page);
   await page.waitForTimeout(3000);
   const status = cartPage.checkProductInCart('Nexus 6');
   expect(await status).toBe(true);
    

   


});