import { ActionOptions } from "gadget-server";

export const run: ActionRun = async ({ params, api, connections, trigger }) => {
  console.warn(
    `     ---------------------------
     --------RUNNING ACTION--------
     ------------------------------`
  );
  // This will be needed when this is setup
  if (trigger.type !== "scheduler") {
    console.log(
      "Different trigger than intended, trigger type->",
      trigger.type
    );
    // throw new Error("This action can only be triggered by Scheduler");
  }

  try {
    // get the BigCommerce API client for the current store
    const bigcommerce = await connections.bigcommerce.forStoreHash(
      "xxazhvt7gd"
    );

    const specialsCategory = await bigcommerce.v3.get("/catalog/categories", {
      query: { name: "Specials" },
    });
    console.log({ specialsCategory });

    const product = await bigcommerce.v3.get("/catalog/products/{product_id}", {
      path: {
        product_id: 553,
      },
    });
    if (!product) {
      throw new Error("Product Not Found");
    }

    console.log(JSON.stringify(product));

    if (product?.sale_price < product.price) {
      const productCategories = product.categories.map((item) => item);
      if (specialsCategory) {
        productCategories.push(specialsCategory[0].id);
      }

      const { weight, type, name, price } = product;

      await bigcommerce.v3.put("/catalog/products/{product_id}", {
        body: { categories: productCategories, name, type, weight, price },
        path: {
          product_id: 553,
        },
      });
    }

    return `Name: ${product?.name}, SKU: ${product?.sku}`;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const options: ActionOptions = {
  triggers: {
    api: true,
    scheduler: [
      { every: "day", at: "06:00 UTC" },
      // { every: "minute" },
    ],
  },
};
