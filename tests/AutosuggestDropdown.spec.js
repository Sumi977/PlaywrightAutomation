import {test, expect} from '@playwright/test'
test('handle auto suggestions', async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.locator('#srcinput').fill("Delhi");

    //let options = await page.$$("//div[@role='option']");
    //console.log("length of suggested options:", options.length);
    await page.waitForSelector("//div[@role='option']");
    const fromcityOption = await page.$$("//div[@role='option']");

    for(let option of fromcityOption){
       const value =  await option.textContent();
       //console.log(value);
       if(value.includes('Hyderabad')){
        option.click();
        break;
       }
    }

    

    



    await page.waitForTimeout(5000);


})