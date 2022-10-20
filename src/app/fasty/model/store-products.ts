export interface StoreProducts {
  name: string,
  productList: Array<{
    name: string,
    imgURL: string,
    price: number
  }>;
}
