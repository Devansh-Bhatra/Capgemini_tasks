export class ProductPage{

constructor(page){

    this.page = page
    this.quantity = page.locator('#quantity')
    this.addToCart = page.locator('#add-to-cart-button')

}

async changeQuantity(qty){

    await this.quantity.selectOption(qty)

}

async addProductToCart(){

    await this.addToCart.click()

}

}