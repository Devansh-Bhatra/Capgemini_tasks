import { test, expect } from "@playwright/test";
 //
// test("assertion demo", async ({ page }) => {

    //await page.goto("https://www.google.com/")
    // await expect(page.locator("#twotabsearchtextbox")).toBeAttached()
    // await expect(page.locator("#twotabsearchtextbox")).toBeVisible()
    // await expect(page.locator("#nav-search-submit-button")).toBeEnabled()
    // await expect(page.locator("#nav-logo-sprites")).toBeVisible()
    // await expect(page.locator("#nav-logo-sprites")).toHaveScreenshot("amazon-logo.png")
    //await expect(page).toHaveScreenshot()
    // await expect(page.locator("#nav-link-accountList")).toContainText("Account")
    // await expect(page.locator("#twotabsearchtextbox")).toHaveScreenshot()
test("simple timeout", async ({ page }) => {

    test.setTimeout(10000);   // test timeout (10 seconds)
    await page.goto("https://www.amazon.com/", { timeout: 5000 });
    await page.locator("#twotabsearchtextbox").fill("laptop", { timeout: 3000 });
    await page.locator("#nav-search-submit-button").click({ timeout: 3000 });
    await page.waitForTimeout(2000); // wait for 2 seconds

})
// })