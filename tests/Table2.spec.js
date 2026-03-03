const {test, expect} = require('@playwright/test')

test('handling table and pagination', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const booktable = await page.locator("[name='BookTable']");
    const columns = await booktable.locator('tbody tr th');
    console.log("Number of columns:", await columns.count());

    const rows = await booktable.locator('tbody tr');
    console.log("Number of rows:", await rows.count());

    for(let i=0;i<await rows.count();i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j=0;j<await tds.count();j++)
        {
            console.log(await tds.nth(j).textContent());
        }

    }

    await page.waitForTimeout(5000);


})