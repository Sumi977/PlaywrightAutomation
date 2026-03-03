import {test, expect} from '@playwright/test'

/*after updating on playwright.config.js screenshot will be taken automatically and
include in the report */

test('test',async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
    
    await page.locator('#login2').click();

    await page.locator('#loginusername').fill("Shyama");
    await page.locator('#loginpassword').fill("test123");

    await page.locator("//button[normalize-space()='Log in']").click();

});

