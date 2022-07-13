import { VendurePlugin } from '@vendure/core';
import { PluginCommonModule } from '@vendure/core';
import { TestFetcher } from './test-plugin.service';
import { RandomTestResolver } from './test-plugin.resolver';
import gql from 'graphql-tag';


const schemaExtension = gql`
  extend type Mutation {
    addRandomImage(id: ID!): Product!
  }
`;


@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [TestFetcher],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [RandomTestResolver],
  },
  configuration: config => {
    config.customFields.Product.push({
      type: 'string',
      name: 'testImageUrl',
    });
    return config;
  }
})
export class TestPlugin {}
