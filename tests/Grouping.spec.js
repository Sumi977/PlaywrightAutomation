const {test, expect} = require('@playwright/test')

test.beforeAll(async()=> {
    console.log('this is before all hook.....')
})

test.afterAll(async() => {
    console.log('this is after all hook......')
})

test.beforeEach(async () => {
    console.log('this is before each hook........')
})

test.afterEach(async() => {
    console.log('this is after each hook......')
})


test.describe.skip('group1',() => {

    test('test1', async({page}) =>{
    console.log('this is my test 1.....')

})

test('test2', async({page}) =>{
    console.log('this is my test 2.....')

})

})

test.describe('group2', () => {
    test('test3', async({page}) =>{
    console.log('this is my test 3.....')

})

test('test4', async({page}) =>{
    console.log('this is my test 4.....')

})

})



