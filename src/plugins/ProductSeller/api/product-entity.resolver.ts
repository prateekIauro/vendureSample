import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { RequestContext, Product, Ctx, ID } from "@vendure/core";

import { ProductSeller } from "../entities/product-seller.entity";
// import { ProductSellerArgs } from '../generated-shop-types';
import { ProductSellerService } from "../services/product-seller.service";

@Resolver("Product")
export class ProductEntityResolver {
  constructor(private readonly productSellerService: ProductSellerService) {}

  @ResolveField()
  seller(@Ctx() ctx: RequestContext, @Parent() product: Product, @Args() args: any){
      return this.productSellerService.getProductSeller(ctx, product, args);
  }
}
