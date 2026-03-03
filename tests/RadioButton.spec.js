const {test,expect} = require('@playwright/test')

test('handle radio button', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //handle radio button

    

    //await page.check("//input[@id='female']");
    await page.locator("//input[@id='male']").check();

    await expect(page.locator("//input[@id='male']")).toBeChecked();

    await expect(page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    //female radio button
    await expect(page.locator("#female")).not.toBeChecked();

   

    await page.waitForTimeout(5000);


})