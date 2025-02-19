import { api, logger, connections } from "gadget-server";

export const getKeywords = async (record: {
  description: string;
  searchKeywords: string | null;
  storeId: string;
  bigcommerceId: number;
  type: "physical" | "digital";
  price: number;
  weight: number;
  name: string;
}) => {
  // get array of unique words in product description
  const descriptionWords = [
    ...new Set(record.description.match(/\w+(?:'\w+)*/g)),
  ];
  // get array of entered search keywords
  const savedKeywords = (await api.searchKeyword.findMany()).map(
    (searchKeyword) => searchKeyword.value
  );
  // get the final list of keywords to be used for the product
  let searchKeywords = [
    ...new Set(descriptionWords.filter((tag) => savedKeywords.includes(tag))),
  ];

  // concatenate with existing searchKeywords, using a Set to remove duplicates
  if (record.searchKeywords) {
    searchKeywords = Array.from(
      new Set(record.searchKeywords.split(",").concat(searchKeywords))
    );
  }

  logger.info(
    { descriptionWords, savedKeywords, searchKeywords },
    "keyword and description info"
  );

  // get the storeHash for the current product
  const store = await api.bigcommerce.store.findById(record.storeId, {
    select: { storeHash: true },
  });
  // use the storeHash to get a BigCommerce API client for the current store
  const bigcommerce = await connections.bigcommerce.forStoreHash(
    store.storeHash
  );
  // update the search_keywords!
  await bigcommerce.v3.put("/catalog/products/{product_id}", {
    path: {
      product_id: record.bigcommerceId,
    },
    body: {
      search_keywords: searchKeywords.toString(),
      type: record.type,
      price: record.price,
      weight: record.weight,
      name: record.name,
    },
  });
};
