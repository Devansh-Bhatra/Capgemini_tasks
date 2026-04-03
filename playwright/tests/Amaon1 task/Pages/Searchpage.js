export class HomePage{
  constructor(page){
    this.page=page;
    this.LaptopBrand=page.getByText('HP')
      this.LaptopRating=page.getByText('4 Stars & Up')
    this.dropdown=page.locator('s-result-sort-select')
    this.products = page.locator('[data-component-type="s-search-result"]')
  }

  async applybrand(){
    await this.LaptopBrand.click()
  }
  async applyRating(){
    await this.LaptopRating.click()
  }
  async sortByPrice(){
    await this.dropdown.selectOption('price-asc-rank')
  }

  async selectproduct(){
    const product=this.product.nth(3)
    const[newpage]=await promise.all([
      this.page.context().waitforEvent('page'),
      product.click()
    ])
    return newpage
  }
}