import {test} from '@playwright/test';

test("get by methods", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username").fill("student")
    // await page.getByLabel("Username",{exact:true}).fill("student")   // label text exactly instead of partially
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()

    await page.getByRole("textbox" ,{name:"username", exact:true})
    await page.getByRole("textbox" ,{name:"password", exact:true})
    await page.getByRole("button" ,{name:"Submit", exact:true}).click()

    await page.getByPlaceholder("Enter your name")
})