import { test, expect } from '@playwright/test';

test('handle dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from dropdown

    //await page.locator("#country").selectOption({label:'Japan'});//label/visible text
    //await page.locator("#country").selectOption('Japan'); //visisble text
     //await page.locator("#country").selectOption({value:'uk'});//value
    //await page.locator("#country").selectOption({index:5});//index

    await page.selectOption("#country",'Japan');

    //Assertions
    //1) check number of options in dropdown - Approach 1

   //const options = await page.locator("#country option");
    //await expect(options).toHaveCount(10);

    //2) Approach 2 - check number of options in dropdown

    //const options = await page.$$('#country option');


    //console.log("Number of options:", options.length);

    //await expect(options.length).toBe(10);

    //3) check presence of value in dropdown - approach 1

    //const content = await page.locator('#country').textContent();
    //console.log(content);
    //await expect(content.includes('Japan')).toBeTruthy();

    // check presence of value in dropdown - approach 2

    /*const options = await page.$$('#country option');
    let status = false;

    for(const option of options)
    {
        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('Australia'))
        {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy(); */
    // select option from dropdown using loop
    /*const options = await page.$$('#country option');

    for(const option of options)
    {
        let value = await option.textContent();
        if(value.includes('japan'))
        {
            await page.selectOption("#country",value);
            break;
        }
    }*/

    
    await page.waitForTimeout(5000);


})