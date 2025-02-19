import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "searchKeyword" model, go to https://jacks-test.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "vyN75NLnhB6x",
  fields: {
    value: {
      type: "string",
      validations: { required: true, unique: true },
      storageKey: "_C52QnlixPg_",
    },
  },
};
