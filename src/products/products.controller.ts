import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.service';

@Controller()
export class ProductsController {
  private productService: ProductsService;

  constructor(productService: ProductsService) {
    this.productService = productService;
  }

  @Get('/products')
  getProducts() {
    return this.productService.getProducts();
  }

  @Post('/products')
  createProduct(@Body() body: Product): Product {
    return this.productService.createProduct(body.id, body.name);
  }
}
