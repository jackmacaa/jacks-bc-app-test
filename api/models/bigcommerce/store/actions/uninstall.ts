import { applyParams, save, ActionOptions } from "gadget-server";

// Powers form in web/routes/change-password.tsx

export const run: ActionRun = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  await save(record);

  // Delete all session records for the associated store
  await api.internal.session.deleteMany({ filter: { bigcommerceStore: { equals: record.id } } });
};

export const onSuccess: ActionOnSuccess = async ({ params, record, logger, api, connections }) => {
  // Your logic goes here
};

export const options: ActionOptions = {
  actionType: "update",
};
