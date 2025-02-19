import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "bigcommerce/store" model, go to https://jacks-test.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-BigCommerce-Store",
  fields: {
    category: {
      type: "hasOne",
      child: {
        model: "bigcommerce/category",
        belongsToField: "store",
      },
      storageKey: "ecc8kpPJdw8s",
    },
    metafields: {
      type: "hasMany",
      children: {
        model: "bigcommerce/metafield",
        belongsToField: "store",
      },
      storageKey: "1ftaEkelyiCJ",
    },
    products: {
      type: "hasMany",
      children: {
        model: "bigcommerce/product",
        belongsToField: "store",
      },
      storageKey: "B0qfNW8I-dfD",
    },
  },
};
