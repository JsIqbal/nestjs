import { Injectable } from '@nestjs/common';

export interface Product {
  id: string;
  name: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getProducts() {
    return this.products;
  }

  createProduct(id: string, name: string): Product {
    const product: Product = {
      id,
      name,
    };
    this.products.push(product);
    return product;
  }
}
