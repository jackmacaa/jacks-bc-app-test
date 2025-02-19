import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "bigcommerce/product" model, go to https://jacks-test.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "zpWbpsWaaGsG",
  fields: {
    bigcommerceId: {
      type: "number",
      validations: { required: true, unique: true },
      storageKey: "Z7kzzlYyrndZ",
    },
    categories: {
      type: "hasMany",
      children: {
        model: "bigcommerce/category",
        belongsToField: "store",
      },
      storageKey: "8KmsH9wObwUk",
    },
    description: { type: "string", storageKey: "zRrGL_iiGgud" },
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "_-EV0MSf7_Iq",
    },
    price: {
      type: "number",
      validations: { required: true },
      storageKey: "717UB5Vk1g5a",
    },
    searchKeywords: { type: "string", storageKey: "Ue4s_9xi9ux2" },
    store: {
      type: "belongsTo",
      parent: { model: "bigcommerce/store" },
      storageKey: "GUQwbya8daL_",
    },
    type: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["digital", "physical"],
      validations: { required: true },
      storageKey: "X_I0Y1xBsmwz",
    },
    weight: {
      type: "number",
      validations: { required: true },
      storageKey: "2vRmiTwq8JR2",
    },
  },
};
