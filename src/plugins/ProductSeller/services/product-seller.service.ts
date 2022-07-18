import { Injectable } from '@nestjs/common';
import { Product, RequestContext, TransactionalConnection, translateDeep } from '@vendure/core';
import { ProductSeller } from '../entities/product-seller.entity';

@Injectable()
export class ProductSellerService {
    constructor(private connection: TransactionalConnection){}
    async getProductSeller(ctx: RequestContext, product: Product, args: any) {
        return await this.connection
        .getRepository(ctx, Product)
        .findOne(product.id, {
            relations: ['seller'],
        });
    }
}