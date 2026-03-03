import {test, expect} from '@playwright/test'

test('test1@sanity', () => {
    console.log('this is my test1......')
})

test('test2@sanity', () => {
    console.log('this is my test2......')
})

test('test3@reg', () => {
    console.log('this is my test3......')
})

test('test4@reg', () => {
    console.log('this is my test4......')
})

test('test5@sanity@reg', () => {
    console.log('this is my test5......')
})