import { test, expect } from '@playwright/test';


import { HomePage } from 'playwright/tests/Amaon1/Pages/Homepage.js';
import { SearchPage } from 'playwright/tests/Amaon1/Pages/Searchpage.js';
import { ProductPage } from 'playwright/tests/Amaon1/Pages/Productpage.js';
import { CartPage } from 'playwright/tests/Amaon1/Pages/Cart.js';


import data from '../testdata/data.json';

test('Open amazon',async({page})=>{
  const home=new HomePage(page)
    const search=new SearchPage(page)
    
    await home.openAmazon();
    await home.searchProduct(data.searchItem)
      await search.applyBrandFilter();
      await search.applyRatingFilter();
     await search.sortHighToLow();
  const newPage = await search.selectThirdProduct();

  const product = new ProductPage(newPage);
  await newPage.waitForLoadState();

  // Step 6: Capture Product Details
  const title = await product.productName.textContent();
  const price = await product.price.textContent();

  console.log("Product Name:", title);
  console.log("Price:", price);


  await expect(product.productName).toBeVisible();

  // Step 7: Add to Cart
  await product.addProduct();

  // Step 8: Go to Cart
  const cart = new CartPage(newPage);
  await cart.openCart();

  // Step 9: Screenshot
  await cart.takeScreenshot();

});

