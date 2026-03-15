import {test} from '@playwright/test';
//test('get by methods', async({page})=>{
  //await page.goto("https://www.saucedemo.com/")
test('amazon test',async({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator("#twotabsearchtextbox").fill("shoes")
await page.keyboard.press("Enter")

})

