// import {test} from '@playwright/test';
import {test} from '@playwright/test';
// test('dropdown test',async ({page})=>{
//   await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
//   await page.locator('#country_code').selectOption({value:"+91"});
//   await page.locator('#select3').selectOption({label:"India"});
//   //await page.locator('#select4').toHaveValue("India");
// })

// test('select multiple options', async ({ page }) => {
//   await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');

//   await page.locator('#select-multiple-native').selectOption([
//     { label: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' },
//     { label: 'Mens Casual Premium Slim Fit T-Shirts ' },
//     { value: 'Mens Cotton Jacket' },
//     { index: 4 }
//   ]);
// });


// test('select Ajio dropdown',async({page})=>{
//   await page.goto('https://www.ajio.com/?srsltid=AfmBOoqL1doFoZuWeQ6kKC0Uq3JIVSZjOHOn8xENR-b0Eu33ygTeIZnA');
//    let options=await page.locator('//button[@class="expand-nav-btn"][1]').all()
//    for(let opt of options){
//     let text=await opt.textContent();
//     if(text?.includes("Clothing")){
//       await opt.click();
//       break;
//     }
//    }

// })

// test.only('select Ajio dropdown', async ({ page }) => {

  // await page.goto('https://www.ajio.com/');

  // const options = await page.locator('//button[@class="expand-nav-btn"]').all();

  // for (const opt of options) {

  //   const text = await opt.textContent();
  //   console.log(text);

  //   if (text?.includes("Clothing")) {
  //     await opt.click();
  //     break;
  //   }

  // }

// });


test("",async({page})=>{
  await page.goto('https://www.ajio.com/');

  const options = await page.locator('//button[@class="expand-nav-btn"]').all();

  for (const opt of options) {

    const text = await opt.textContent();
    console.log(text);

    if (text?.includes("Clothing")) {
      await opt.click();
      break;
    }

  }

})