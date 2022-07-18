import { Parent, ResolveField, Resolver, Args } from '@nestjs/graphql';
import {
    Ctx,
    Product,
    RequestContext,
    TransactionalConnection,
    translateDeep,
    ListQueryBuilder,
} from '@vendure/core';

import { ProductSeller } from '../entities/product-seller.entity';

@Resolver('ProductSeller')
export class ProductSellerEntityResolver {
    constructor(private listQueryBuilder: ListQueryBuilder, private connection: TransactionalConnection) {}

    @ResolveField()
    async products(@Parent() seller: ProductSeller, @Args() args: any) {
        return this.listQueryBuilder
            .build(Product, args.options || undefined, {
                relations: ['seller'],
                customPropertyMap: {
                    productSellerId: 'seller.id'
                }
            })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
                items,
                totalItems,
            }));
    }
}