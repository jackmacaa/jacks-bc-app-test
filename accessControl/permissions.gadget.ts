import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://jacks-test.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    "bigcommerce-app-users": {
      storageKey: "Role-BigCommerce-App",
      models: {
        "bigcommerce/metafield": {
          read: true,
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        "bigcommerce/store": {
          read: {
            filter: "accessControl/filters/bigcommerce/store.gelly",
          },
          actions: {
            install: true,
            reinstall: true,
            removeUser: true,
            uninstall: true,
          },
        },
        searchKeyword: {
          read: true,
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
      },
    },
    unauthenticated: {
      storageKey: "unauthenticated",
    },
  },
};
