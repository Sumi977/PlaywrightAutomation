const {test, expect} = require('@playwright/test')

let page;

test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill("Shyama");
    await page.locator('#loginpassword').fill("test123");

    await page.locator("//button[normalize-space()='Log in']").click();

})

test.afterAll( async() =>{

    await page.locator('#logout2').click();

})


test('home page test', async () => {
    //Home page
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

});

test('add to cart test', async () => {

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept();

    })


})