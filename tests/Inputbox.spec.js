import {test,expect} from '@playwright/test'

test('handle inputbox test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //input box - name

    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill('John');

    await page.waitForTimeout(5000);



})