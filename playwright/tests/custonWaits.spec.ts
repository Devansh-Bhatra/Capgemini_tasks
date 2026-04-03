import {test} from '@playwright/test';
test ('custom waits',async({page})=>{
  await page.goto("https://www.amazon.com/");
  await page.waitForFunction{()=>{
    let ele=document.querySelector("cv bn")
    return ele.length>1
  }
})