export class ProductModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public likes: number,
    public rating: number,
    public imageUrl: string,
  ) {}
}
