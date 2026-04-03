export class SearchPage{

constructor(page){

    this.page = page
    this.tenGBRam = page.getByText('10 GB')
    this.products = page.locator('[data-component-type="s-search-result"]')
}

async filterRam(){
    await this.tenGBRam.click()
}

async selectFourthProduct(){

    const product = this.products.nth(3)

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        product.click()
    ])

    await newPage.waitForLoadState()
    return newPage
}

}