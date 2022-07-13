import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Ctx, Allow, ProductService, RequestContext, Transaction } from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';
import { TestFetcher } from './test-plugin.service';

@Resolver()
export class RandomTestResolver {

  constructor(private productService: ProductService, private testFetcher: TestFetcher) {}

  @Transaction()
  @Mutation()
  @Allow(Permission.UpdateCatalog)
  async addRandomImage(@Ctx() ctx: RequestContext, @Args() args: any) {
    const testImageUrl = await this.testFetcher.fetchTestImage();
    return this.productService.update(ctx, {
      id: args.id,
      customFields: { testImageUrl },
    });
  }
}
