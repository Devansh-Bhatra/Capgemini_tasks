import {test} from '@playwright/test'
import {HomePage} from 'playwright/tests/amazon/pages/Homepage.js'
import {SearchPage} from 'playwright/tests/amazon/pages/Searchpage.js'
import {ProductPage} from 'playwright/tests/amazon/pages/productPage.js'
import data from 'playwright/tests/amazon/testdata/amazondata.json'

test('Amazon Phone Purchase Flow', async ({page}) => {

const home = new HomePage(page)
const search = new SearchPage(page)

await home.openAmazon()

await home.searchProduct(data.searchItem)

await search.filterRam()

const productPageTab = await search.selectFourthProduct()

const product = new ProductPage(productPageTab)

await product.changeQuantity(data.quantity)

await product.addProductToCart()

})