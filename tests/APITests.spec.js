import { test, expect } from '@playwright/test'

var bookId;

test.skip('get users', async ({request}) => {

    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('create user', async ({request}) => {

    const response = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
        {
            data: {
                "id": 200,
                "title": "Hope",
                "description": "Inspiring",
                "pageCount": 200,
                "excerpt": "Feeling-good",
                "publishDate": "2026-01-09T05:43:46.963Z"
            },
            headers: {
                "Accept": "application/json"

            }
        });

     console.log(await response.json());
     expect(response.status()).toBe(200); 
     
     var res = await response.json();
     bookId = res.id;
     console.log("id of book:",bookId);

})

test('update user', async ({request}) => {

    const response = await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/200',
        {
            data: {
                
                "title": "Dreams",
                "description": "Inspiring",
                "pageCount": 250,
                "excerpt": "Feeling-good",
                "publishDate": "2026-01-09T05:43:46.963Z"
                
            },

            headers: {"Accept": "application/json"}    
        });
        console.log(response.json());
        expect(response.status).toBe(200);

})

test('delete user', async ({request}) => {
    const response = await request.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/200');
    expect(response.status).toBe(204);

})