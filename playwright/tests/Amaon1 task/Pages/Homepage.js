export class HomePage{
  constructor(page){
    this.page=page;
    this.searchBox=page.getByPlaceholder('Search Amazon.in')
    this.searchButton=page.getByRole('submit',{name:'Go'})
  }

  async openAmazon(){
await this.page.goto("https://www.amazon.in/")
}

  async searchProduct(productName){
    await this.searchBox.fill(productName)
    await this.searchButton.click()
  }
}