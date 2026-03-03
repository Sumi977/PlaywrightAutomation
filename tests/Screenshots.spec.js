import {test, expect} from '@playwright/test'

test('page screenshot',async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})

})

test('full page screenshot',async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png',fullPage:true})


})

test.only('element screenshot',async ({page}) => {

     await page.goto('https://www.demoblaze.com/');
     await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({path:'tests/screenshots/'+Date.now()+'Nokia-lumia.png',})



})