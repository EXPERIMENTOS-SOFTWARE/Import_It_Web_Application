export interface StoreProducts {
  name: string,
  productList: Array<{
    id: number,
    name: string,
    imgURL: string,
    price: number
  }>;
}
