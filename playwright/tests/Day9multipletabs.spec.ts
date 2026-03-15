import {test} from '@playwright/test';
// test("",async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://www.flipkart.com/")
//     await page.locator("//span[@class='b3wTlE']").click();
//     await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("shoes");
//     await page.locator('//button[@class="XFwMiH"]').first().click();
//     const [page2]=await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator("//img[@class='MZeksS']").first().click()
//     ])
//      await page2.waitForLoadState();
//     console.log("Page1",page.url());
//     console.log("Page2",page2.url())
// })
// test.only("task2",async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
 
//     const [page2]=await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator("//h2[@class='text-lg font-semibold text-gray-800'][1]/../descendant::button").first().click()
//     ])
//      await page2.waitForLoadState();
//     const text= await page2.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
//     console.log("Text is: ",text);
    
// })

test("", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");

  const [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('//section[@class="poppins text-[14px]" and text()="Download"]').click()
  ]);

  await page2.getByPlaceholder("Enter text here").fill("Hello, World!");
  await page2.getByPlaceholder("Filename").press("Control+A");
  await page2.getByPlaceholder("Filename").fill("greet.txt");
  await page2.getByRole('button', { name: 'Download' }).click();

});