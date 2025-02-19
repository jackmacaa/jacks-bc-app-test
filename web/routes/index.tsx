import {
  Box,
  Panel,
  Text,
  StatefulTable,
  Form,
  FormGroup,
  Input,
  Button,
  ProgressCircle,
  Message,
} from "@bigcommerce/big-design";
import { DeleteIcon } from "@bigcommerce/big-design-icons";
import { useFindMany, useActionForm, useBulkAction } from "@gadgetinc/react";
import { useState } from "react";
import { api } from "../api";
import { StartButton } from "../components/StartButton";

export default function () {
  const [productMetafieldsIds, setproductMetafieldsIds] = useState<string[]>(
    []
  );

  // a useFindMany hook to fetch search keyword data
  const [{ data, fetching, error }] = useFindMany(api.bigcommerce.metafield);

  return (
    <>
      <StartButton />
      <Panel description="Category mover">
        {fetching && <ProgressCircle size="large" />}
        {error && <ErrorMessage title="Error reading keywords" error={error} />}
        {data && (
          <StatefulTable
            stickyHeader
            pagination
            itemName="product metafields"
            selectable
            onSelectionChange={(value) =>
              setproductMetafieldsIds(value.map((v) => v.id))
            }
            columns={[
              {
                header: "Product ID",
                hash: "bigcommerceId",
                render: ({ bigcommerceId }) => bigcommerceId,
              },
              {
                header: "Key",
                hash: "entityId",
                render: ({ entityId }) => entityId,
              },
              {
                header: "Value",
                hash: "value",
                render: ({ value }) => value,
              },
            ]}
            items={data}
            emptyComponent={
              <Text marginTop="medium">
                No search keywords - start by adding one above!
              </Text>
            }
          />
        )}
      </Panel>
    </>
  );
}

const ErrorMessage = ({ title, error }: { title: string; error: Error }) => {
  return (
    <Message
      type="error"
      header={title}
      messages={[
        {
          text: error.toString(),
        },
      ]}
      marginBottom="medium"
    />
  );
};
