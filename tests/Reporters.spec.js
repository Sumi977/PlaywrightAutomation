const { test, expect} = require ('@playwright/test');

test('test 1', async ({page}) => {
    
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');

})


test('test 2', async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

})


test('test 3', async ({page}) => {
    
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title !');

})