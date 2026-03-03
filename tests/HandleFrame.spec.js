const {test, expect} = require('@playwright/test')

test('frame', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Get frame using the frame's name attribute
    const allframes = await page.frames();
    console.log("Number of frames: ",allframes.length);

    //approach 1: using name or url of the page
    //const frame = await page.frame('nameofFrame');//if name of the frame available

    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.locator("[name='mytext1']").fill("Hello");

    //const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
    //await frame2.fill("[name='mytext2']","Good Morning");

    //approach 2 -using frame locator
    const inputbox = await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
    inputbox.fill("Hello");

    await page.waitForTimeout(5000);


})