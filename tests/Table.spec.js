const {test, expect} = require('@playwright/test')

test('handling table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


   const table = await page.locator('#productTable');

   //1)total number of rows and columns

   const columns = await table.locator('thead tr th');
   console.log('Number of columns:', await columns.count());

   const rows = await table.locator('tbody tr');
   console.log('Number of rows:', await rows.count());

   expect(await columns.count()).toBe(4);
   expect(await rows.count()).toBe(5);

   //2)select checkbox for product 4 based on name

   /*const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
   })
   await matchedRow.locator('input').check(); */

   //3) select multiple products by using reusable function

   //await selectProduct(rows,page,'Smartphone');
   //await selectProduct(rows,page,'Tablet');
   //await selectProduct(rows,page,'Wireless Earbuds');

   //4) print all product details using loop

   /*for(let i=0; i<await rows.count();i++)
   {
    const row = rows.nth(i);
    const tds = row.locator('td');
    for(let j = 0; j<await tds.count()-1; j++)
        {
            console.log(await tds.nth(j).textContent());

        }

   }*/

    //read data. from all the pages in the table

    const pages = await page.locator('.pagination li a');
    console.log( "Number of pages:",await pages.count());

    for(let p=0; p<await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }

        for(let i=0; i<await rows.count();i++)
            {
                const row = rows.nth(i);
                const tds = row.locator('td');
                
                for(let j = 0; j<await tds.count()-1; j++)
                    
                    {
                        console.log(await tds.nth(j).textContent());

                    }

            }
            await page.waitForTimeout(3000)
        }
        
        await page.waitForTimeout(5000);


})

/*async function selectProduct(rows,page,name)
{
    const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
   })
   await matchedRow.locator('input').check();

}*/