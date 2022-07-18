import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    patchEntity,
    Permission,
    Product,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

import { ProductSeller } from '../entities/product-seller.entity';

@Resolver()
export class ProductSellerShopResolver {
}