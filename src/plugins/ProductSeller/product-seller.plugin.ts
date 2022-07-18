import { LanguageCode, PluginCommonModule, VendurePlugin } from "@vendure/core";

import { ProductSeller } from "./entities/product-seller.entity";
import { adminApiExtensions, shopApiExtensions } from "./api/api-extensions";
import { ProductEntityResolver } from "./api/product-entity.resolver";
import { ProductSellerEntityResolver } from "./api/product-seller-entity.resolver";
import { ProductSellerAdminResolver } from "./api/product-seller-admin.resolver";
import { ProductSellerShopResolver } from "./api/product-seller-shop.resolver";
// import path from "path";
// import { AdminUiExtension } from "@vendure/ui-devkit/compiler";

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [ProductSeller],
  adminApiExtensions: {
    schema: adminApiExtensions,
    resolvers: [
      ProductEntityResolver,
      ProductSellerAdminResolver,
      ProductSellerEntityResolver,
    ],
  },
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [
      ProductEntityResolver,
      ProductSellerShopResolver,
      ProductSellerEntityResolver,
    ],
  },
  configuration: (config) => {
    config.customFields.Product.push({
      name: "seller",
      label: [{ languageCode: LanguageCode.en, value: "Product Seller" }],
      type: "relation",
      entity: ProductSeller,
      ui: { component: "product-seller-selector-form-input" },
      eager: false,
    });
    return config;
  },
})
export class ProductSellerPlugin {}
