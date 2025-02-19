// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/jacks-test
import { Client } from "@gadget-client/jacks-test";

export const api = new Client({ environment: window.gadgetConfig.environment });
