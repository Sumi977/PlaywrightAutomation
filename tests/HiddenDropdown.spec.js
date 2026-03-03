const {test, expect} = require("@playwright/test")

test('handle hidden dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();

    await page.locator("//span[text()='PIM']").click();

    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click();
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for(let option of options){
        const jobTitle = await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes("IT Manager")){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})