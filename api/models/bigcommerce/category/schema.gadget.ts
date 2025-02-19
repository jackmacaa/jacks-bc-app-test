import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "bigcommerce/category" model, go to https://jacks-test.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "HIRKkrYt3g7r",
  fields: {
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "FLeNUQ1CI3CM",
    },
  },
};
