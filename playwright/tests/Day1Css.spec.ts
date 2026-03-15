import { test, expect } from '@playwright/test';

test("CSS Selectors Practice - Techbeamers", async ({ page }) => {

  await page.goto("https://techbeamers.com/practice-test-login/");

  await page.locator("#username").fill("student");
  await page.locator(".textfield").first().fill("student");
  await page.locator("input#username").fill("student");
  await page.locator("input.textfield").first().fill("student");
  await page.locator('[name="username"]').fill("student");
  await page.locator('input[name="password"]').fill("Password123");
  await page.locator("input#password.textfield").fill("Password123");
  await page.locator("input#password.textfield").fill("Password123");
  await page.locator("input[type='submit']").click();

  await expect(page.locator("h2")).toHaveText("Logged In Successfully");

});