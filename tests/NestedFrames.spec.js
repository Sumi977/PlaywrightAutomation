const {test, exoect} = require('@playwright/test')
test('nested frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    //frame3.locator("[name='mytext3']").fill('I am frame 3');

    //nested frames

    const childFrames = await frame3.childFrames();
    //await childFrames[0].locator("//div[@id='i9']//div[@class='AB7Lab Id5V1']").check();

    await childFrames[0].locator("//div[@id='i21']//div[@class='uHMk6b fsHoPb']").check();




    await page.waitForTimeout(5000);

})