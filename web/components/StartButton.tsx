import { useGlobalAction } from "@gadgetinc/react";
import { api } from "gadget-server";

export const StartButton = () => {
  //   const [{ data, error, fetching }, handProductsWebhooks] = useGlobalAction(
  //     api.bigcommerce.handProductsWebhooks
  //   );

  return (
    <>
      <button
      // onClick={async () => {
      //   await handProductsWebhooks();
      // }}
      >
        Run Manual Sync
      </button>
      {/* Result: {JSON.stringify(data)} */}
    </>
  );
};
