import { gql } from "apollo-server-core";

export const commonApiExtensions = gql`
  type ProductSeller implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    product: Product!
    name: String!
    bio: String!
    image: String!
    products: Product[]
  }
  extend type Product {
    seller(options: ProductSellerOptions): ProductSeller!
  }
  # Auto-generated at runtime
  input ProductSellerOptions
`;

export const shopApiExtensions = gql`
  ${commonApiExtensions}
  extend type Query {
    productSeller(id: ID!): ProductSeller
  }
`;

export const adminApiExtensions = gql`
  ${commonApiExtensions}
  input CreateProductSellerInput {
    productId: ID!
    name: String!
    bio: String!
    image: String!
  }
  input UpdateProductSellerInput {
    id: ID!
    name: String!
    bio: String!
    image: String!
  }
  extend type Mutation {
    createProductSeller(input: CreateProductSellerInput!): ProductSeller!
    updateProductSeller(input: UpdateProductSellerInput!): ProductSeller!
  }
`;
