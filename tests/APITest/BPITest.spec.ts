import { test, expect } from '@playwright/test';

test('Verify get API response', async ({ request }) => {

    var requestObj = await request.get(process.env.API!);

    expect(requestObj.ok()).toBeTruthy();

    let response = JSON.parse(JSON.stringify(await requestObj.json()));
    expect(Object.keys(response.bpi).length == 3).toBeTruthy();
    expect('USD' in response.bpi).toBeTruthy();
    expect('GBP' in response.bpi).toBeTruthy();
    expect('EUR' in response.bpi).toBeTruthy();
    expect(response.bpi.GBP.description === 'British Pound Sterling').toBeTruthy();

});