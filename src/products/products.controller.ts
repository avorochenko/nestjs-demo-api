import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto'

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll'
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return `getById ${id}`
  }

  @Post()
  create(@Body() createProduct: CreateProductDto): string {
    return `Title: ${createProduct.title} Price: ${createProduct.price}`
  }
}
