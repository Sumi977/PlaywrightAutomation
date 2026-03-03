const {test,expect} = require('@playwright/test')
const { clear } = require('node:console')

test('AssertionTest', async ({page})=>{

     await page.goto('https://demo.nopcommerce.com/register')

     await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

     await expect(page).toHaveTitle('nopCommerce demo store. Register')

     const logoElement = await page.locator('.header-logo')

     await expect(logoElement).toBeVisible()

     const searchStore = await page .locator('#small-searchterms')

     await expect(searchStore).toBeEnabled();

     //Radio button
     const maleRadioBtn = await page.locator('#gender-male')
     await maleRadioBtn.click()

     await expect(maleRadioBtn).toBeChecked()

     //check box

     const checkBox = await page.locator('#NewsLetterSubscriptions_0__IsActive')

     await expect(checkBox).toBeChecked()

     //elements have attribute

     const registerBtn = await page.locator('#register-button')
     await expect(registerBtn).toHaveAttribute('type',"submit")

     //element matches text

     const registerText = await page.locator('.page-title h1')
     await expect(registerBtn).toHaveText('Register')
     // element contains text
     await expect(registerBtn).toContainText('ter')

    //input has a value

    const firstNameTextBox = await page.locator('#FirstName')
    firstNameTextBox.fill('Admin')
    await expect(firstNameTextBox).toHaveValue('Admin')



})