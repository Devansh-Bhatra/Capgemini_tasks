export class Productpage{
  constructor(page){
    this.page=page;
     this.productname=page.locator('#productTittle')
     this.addToCart=page.locator('#add-to-cart-button')
  }

  async productdetails(){
     const name=await this.productname.getByContext()
     const price=await this.productname.getByContext()

     console.log(name,price)
  }
  async addToCart(){
    await this.addToCart.click()
  }
}