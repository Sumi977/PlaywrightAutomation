const {test,expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('select multiple checkboxes from table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    console.log(await columns.count());

    const rows = await table.locator('tbody tr');
    console.log(await rows.count());

    //select checkbox from table

    //await selectCheckbox(rows,page,'Smartphone');
    //await selectCheckbox(rows,page,'Laptop');
    //await selectCheckbox(rows,page,'Wireless Earbuds');

    await page.waitForTimeout(5000);


    /*for(let i =0; i<await rows.count();i++)
    {
        const row = rows.nth(i);
        const tds =row.locator('td');
        for(let j =0; j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent());
        }
    }*/

    const pages = await page.locator('.pagination li a');
    console.log(await pages.count());

    for(let p =0; p< await pages.count();p++)
        {
            if(p>0){
                await pages.nth(p).click()
            }
            for(let i =0; i<await rows.count();i++)
    {
        const row = rows.nth(i);
        const tds =row.locator('td');
        for(let j =0; j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent());
        }
    }
      await page.waitForTimeout(5000);

        }
    


})

/*async function selectCheckbox(rows,page,name){

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();


}*/

