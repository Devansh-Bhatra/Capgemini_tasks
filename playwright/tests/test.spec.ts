import { test } from '@playwright/test';

// test('Click popup button', async ({ page }) => {
//   page.on("dialog",async(d)=>{
//     if(d.type()=="alert"){
//     console.log(d.message())
//     await d.accept()
//     }
//   })

  // await page.goto("https://testautomationpractice.blogspot.com/")

  // await page.getByRole('button', { name: 'Simple Alert' }).click()
  // await page.getByRole('button',{name:"OK"}).click()
  //page.on("dialog,()=>{}")
  //page.once("dialog", async dialog=>{
  //  console.log(dialog.message())
  //  await dialog.accept()
  //})

// 
//import {test} from "@playwright/test"

test("notifications",async({browser})=>{
    const context=await browser.newContext({permissions:["notifications"]})
    await context.grantPermissions(["notifications"])
    const page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("//button[@id='browNotButton']").click();
    const response=await page.evaluate(()=>{
    return Notification.requestPermission()
    })
    console.log(response);
    

})