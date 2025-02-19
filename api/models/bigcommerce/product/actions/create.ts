import { applyParams, save, ActionOptions } from "gadget-server";
import { getKeywords } from "../utils";

export const run: ActionRun = async ({ params, record }) => {
  applyParams(params, record);
  await save(record);
};

export const onSuccess: ActionOnSuccess = async ({ record }) => {
  if (record.storeId && record.description && record.description !== "") {
    await getKeywords({
      ...record,
      storeId: record.storeId,
      description: record.description,
    });
  }
};

export const options: ActionOptions = {
  actionType: "create",
};
