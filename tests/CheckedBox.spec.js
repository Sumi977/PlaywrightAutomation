const {test,expect } = require('@playwright/test')

test('handle checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@id='sunday' and @type='checkbox']").check();

    //await page.check("//input[@id='sunday' and @type='checkbox']")

    await expect(page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();


    //multiple checkboxes
    const checkboxLocators = 
    [
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']"
    ];

    for(const locator of checkboxLocators)
        {
            await page.locator(locator).check();

        };

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked())
            {
            await page.locator(locator).uncheck();
            }
    }

     await page.waitForTimeout(5000);


})