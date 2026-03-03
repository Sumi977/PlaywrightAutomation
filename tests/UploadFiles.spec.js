const {test, expect} = require('@playwright/test')
test('upload single file', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForSelector('#singleFileInput');

    await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/file.txt');

    await page.waitForTimeout(5000);

})

test.only('upload multile files', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/file.txt','tests/uploadFiles/myfile.txt']);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('file.txt');

    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('myfile.txt');

     await page.locator('#filesToUpload').setInputFiles([]);
     expect(page.locator('#fileList li')).toHaveText('No Files Selected');

     await page.waitForTimeout(5000);






})
