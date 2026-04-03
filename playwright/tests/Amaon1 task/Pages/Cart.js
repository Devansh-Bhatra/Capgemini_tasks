export class CartPage {

constructor(page){

this.page = page
this.cart = page.locator('#nav-cart')

}

async openCart(){
await this.cart.click()
}
}