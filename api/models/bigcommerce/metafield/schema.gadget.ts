import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "bigcommerce/metafield" model, go to https://jacks-test.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "OfMe7Dmp7rHo",
  fields: {
    bigcommerceId: {
      type: "number",
      validations: { required: true, unique: true },
      storageKey: "P_RiUyCEAGKS",
    },
    category: {
      type: "hasOne",
      child: {
        model: "bigcommerce/category",
        belongsToField: "store",
      },
      storageKey: "1WDJOFKGM1dU",
    },
    entityId: {
      type: "number",
      validations: { required: true, unique: true },
      storageKey: "v05M8jfzxxtl",
    },
    key: {
      type: "string",
      validations: { required: true },
      storageKey: "HrDol6df7SQD",
    },
    store: {
      type: "belongsTo",
      parent: { model: "bigcommerce/store" },
      storageKey: "cnVlJm22Dc6q",
    },
    value: {
      type: "string",
      validations: { required: true },
      storageKey: "i1rq9-F86FfP",
    },
  },
};
