const {test, expect} = require('@playwright/test')
test.skip('alert with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialog window handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

     
    //page.on('dialog', dialog => dialog.accept());

    await page.locator("#alertBtn").click();

    await page.waitForTimeout(5000);

})

test.skip('confirmation dialed-alert with OK and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialog window handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();//close by using ok button
        //await dialog.dismiss();//close by using cancel button
    })

     
    //page.on('dialog', dialog => dialog.accept());

    await page.locator("#confirmBtn").click();
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");


    await page.waitForTimeout(5000);

})

test('confirmation dialed-alert with prompt', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialog window handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Smith');//close by using ok button
    })

     
    //page.on('dialog', dialog => dialog.accept());

    await page.locator("#promptBtn").click();
    await expect(page.locator("#demo")).toHaveText("Hello Smith! How are you today?");


    await page.waitForTimeout(5000);

})