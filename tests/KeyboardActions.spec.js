const { test, expect } = require('@playwright/test')
test('keyboard action', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    //await page.locator("[name='text1']").fill('Hello welcome to automation !');

    await page.type("[name='text1']", 'Hello welcome to automation !');

    //ctrl + A -select the text
    await page.keyboard.press('Meta+A');

    //ctrl + C -copy text
    await page.keyboard.press('Meta+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab'); //release action

    //Ctrl + v
    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);


})
test.only('keyboard action test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.locator('#userEmail').fill('johnsmith26@gmail.com');
    await page.locator('#userPassword').fill('Learning@26');
    await page.locator('#login').click();

    const searchBox = page.locator("[name='search']").last();

    await searchBox.fill('ZARA COAT 3');

    await searchBox.press('Enter');


    await page.waitForTimeout(3000);


})