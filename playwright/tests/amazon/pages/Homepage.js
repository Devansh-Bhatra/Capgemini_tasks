export class HomePage {

constructor(page){
    this.page = page
    this.searchBox = page.locator('#twotabsearchtextbox')
    this.searchButton = page.locator('#nav-search-submit-button')
}

async openAmazon(){
    await this.page.goto("https://www.amazon.in/")
}

async searchProduct(product){
    await this.searchBox.fill(product)
    await this.searchButton.click()
}

}