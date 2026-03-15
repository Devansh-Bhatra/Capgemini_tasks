import { test, expect } from "@playwright/test";

test("explecit_waits", async ({ page }) => {
 // await page.goto("https://www.amazon.in");
 // await page.waitForTimeout(1000);
  //let mxplayer = await page
  //  .locator('//*[@id="nav-xshop"]/ul/li[2]/div/a')
  //  .waitFor({ state: "detached" });
  await page.goto("https://www.amazon.com/");
    await page.getByTestId("nav_cs_gc").waitFor({timeout : 5000, state : "visible"});


    // Using Assertion
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "visible"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "hidden"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "attached"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "detached"}); //-- passed
  
});