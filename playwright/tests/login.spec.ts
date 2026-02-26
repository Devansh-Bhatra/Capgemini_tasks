import { test, expect } from '@playwright/test';

test('Open Amazon and check viewport', async ({ page }) => {

  // Step 1: Navigate to Amazon homepage
  await page.goto('https://amazon.com');


  // Step 2: Get and print the current viewport size (default browser size)
  const viewport = page.viewportSize();
  console.log('Initial Viewport Size:', viewport);


  // Step 3: Change the viewport size to custom dimensions (Desktop view)
  await page.setViewportSize({ width: 1280, height: 800 });

  // Print updated viewport size
  console.log('Updated Viewport Size:', await page.viewportSize());


  // Step 4: Locate Amazon logo using CSS ID selector
  const logo = page.locator('#nav-logo-sprites');

  // Verify that the logo is visible on the page
  await expect(logo).toBeVisible();


  // Step 5: Reload/Navigate again to Amazon homepage
  await page.goto('https://amazon.com');


  // Step 6: Get and print page title
  const title = await page.title();
  console.log('Page Title:', title);


  // Step 7: Take a screenshot of the homepage
  await page.screenshot({ path: 'amazon_homepage.png' });
  console.log('Screenshot taken: amazon_homepage.png');


  // Step 8: Verify again that logo is visible after reload
  await expect(logo).toBeVisible();

});