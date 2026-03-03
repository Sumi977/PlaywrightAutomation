const {test, expect} = require('@playwright/test')

test('home page test', async ({page}) => {

    

    await page.goto('https://www.demoblaze.com/');

    //Login
    
    await page.locator('#login2').click();

    await page.locator('#loginusername').fill("Shyama");
    await page.locator('#loginpassword').fill("test123");

    await page.locator("//button[normalize-space()='Log in']").click();
     
    //Home page
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

    //Logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(3000);
})

test('add to cart test', async ({page}) => {
    
    await page.goto('https://www.demoblaze.com/');

    //Login
    
    await page.locator('#login2').click();

    await page.locator('#loginusername').fill("Shyama");
    await page.locator('#loginpassword').fill("test123");
     await page.locator("//button[normalize-space()='Log in']").click();

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept();

    })

    await page.locator('#logout2').click();

    await page.waitForTimeout(3000);

   

})