import {test} from "@playwright/test"
import path from "path"

// test("notifications",async({browser})=>{
//   const context =await browser.newContext({httpCredentials:
//     {username:"admin",
//     password:"admin"}})
//   const page=await context.newPage()
//   await page.goto("https://the-internet.herokuapp.com/basic_auth")
//   console.log(await page.locator("p").textContent())
//   })

 test("upload file",async({page})=>{
//   console.log(__dirname);
//   console.log(__filename);
//   await page.goto("https://testautomationpractice.blogspot.com/")
//   await page.locator("//*[@id='singleFileInput']").setInputFiles("playwright/tests/test.spec.ts")
//   await page.getByRole("button",{name:"Upload Single File"}).click()
//   await page.waitForTimeout(3000)

// await page.locator("//*[@id='singleFileInput']").setInputFiles(path.join(__dirname,"test.spec.ts"))
// await page.getByRole("button",{name:"Upload Single File"}).click()
//  })
//  let downloadfolder="C:\Users\devan\OneDrive\Desktop\Cap\playwright\downloads";
//  let filenmae=await downloadfolder.suggestedFilename()


//  import { test } from '@playwright/test';
// import path from 'path';


//!_______________A1________________

// test("Upload files",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator("#singleFileInput").setInputFiles("playwright/tests/test.spec.ts")
//     await page.getByRole('button',{name:"Upload Single File"}).click();
//     await page.waitForTimeout(5000)
    
// })
// test("Upload Multiple files",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     let files:string[]=["C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.txt","C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.xls"]
//     await page.locator("#multipleFilesInput").setInputFiles(files)
//     await page.getByRole('button',{name:"Upload Multiple Files"}).click();
//     await page.waitForTimeout(5000)
    
// })

test("Upload files from local system",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("C:/Users/sriva/OneDrive/Desktop/backend-deep/New Text Document.txt")
    await page.getByRole('button',{name:"Upload Single File"}).click();
    await page.waitForTimeout(5000)
    
})

//!_______________A2___________________

test("Upload files A2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"/uploadFiles/demo.txt"))
    await page.getByRole('button',{name:"Upload Single File"}).click();
    await page.waitForTimeout(5000)
    
})

test("Upload Multiple files A2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
      let files:string[]=["C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.txt","C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.xls"]
    await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../tests/uploadFiles/demo.xls"),path.join(__dirname,"../tests/uploadFiles/demo.txt")])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click();
    await page.waitForTimeout(5000)
    
})
