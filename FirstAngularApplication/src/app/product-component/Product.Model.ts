export class ProductModel {
  productId: number;
  productName: string;
  productDescription: string;
  productCost: number;
  productImage: string;

  constructor(id: number, name: string, desc: string, cost: number, image: string) {
    this.productId = id;
    this.productName = name;
    this.productDescription = desc;
    this.productCost = cost;
    this.productImage = image;
  }
}
