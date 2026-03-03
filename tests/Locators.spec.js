//const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //click on login button - property

    //await page.locator(id="login2").click()
    await page.click("id=login2")
    
    //provide username - CSS

    //await page.locator('#loginusername').fill("Shyama")
    await page.fill("#loginusername","Shyama")

    //await page.type("#loginusername","Shyama")

   // provide password
   await page.fill("#loginpassword","test123")
   // click on login button
   await page.click("//button[text()='Log in']")

   //verify logout link presence

   const logoutLink = await page.locator("//a[normalize-space()='Log out']")

   await expect(logoutLink).toBeVisible();

   await page.close();




})